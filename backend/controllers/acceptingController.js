const Outing = require("../models/outingModel");

// convert postal code to {lat, long}
async function getCoordinates(postalCode) {
    try {
        url = `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&format=json&addressdetails=1&limit=1`;
        // send url encoded request to api
        const response = await fetch(url);

        // error catching
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract latitude and longitude from the response
        // if response is not empty
        if (data.length > 0) {
            const location = {
                lat: data[0].lat,
                lon: data[0].lon
            };
            return location;
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
    }
}

// fing given type of amenities in radius around given postal code
async function searchForAmenities(postalCode, radius, type) {
    try {
        //constants for conversion
        const kmToLongitude = 111.320;
        const kmToLatitude = 111.321;

        //variable for user's postal code in lat/long
        let userlocation = await getCoordinates(postalCode);

        //convert the range to coordinates
        let rangeLatitude = radius / kmToLatitude;
        let rangeLongitude = radius / (kmToLongitude * Math.cos(rangeLatitude));

        // calculate the final lat/longs of search range
        let minLat = userlocation.lat - rangeLatitude;
        let minLong = Number(userlocation.lat) + Number(rangeLatitude);
        let maxLat = userlocation.lon - rangeLongitude;
        let maxLong = Number(userlocation.lon) + Number(rangeLongitude);

        // Make the POST request to the Overpass API
        const response = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(`
                [out:json];
                (
                    node["amenity"=${type}](${minLat},${maxLat},${minLong},${maxLong});
                    way["amenity"=${type}](${minLat},${maxLat},${minLong},${maxLong});
                    relation["amenity"=${type}](${minLat},${maxLat},${minLong},${maxLong});
                );
                out geom;
            `)
        });

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            return data.elements;
        } 
        // catch error (non json response)
        else {
            const text = await response.text();
            throw new Error(`Received non-JSON response: ${text}`);
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
}

exports.findAmenities = async(req, res) => {
    // get form data
    const { postalCode, radius, amenities, joinCode } = req.body;

    // to hold all results
    let results = [];

    // loop throught all types and add search resulst
    for (const a of amenities) {
        // get search results
        const b = await searchForAmenities(postalCode, radius, a);
        let count = 0;
        
        // get first 10 or less
        for (let i = 0; i < b.length; i++) {
            if (count >= 10) {
                break;
            }

            const entry = b[i];

            // get info
            const name = entry.tags?.name;
            const number = entry.tags?.['addr:housenumber'] || "";
            const street = entry.tags?.['addr:street'] || "";
            const city = entry.tags?.['addr:city'] || "";
            const postcode = entry.tags?.['addr:city'] || "";
            const address = `${number} ${street} ${city} ${postcode}`;
            const website = entry.tags?.website || "";
            const hours = entry.tags?.opening_hours || "";

            // make json list
            const c = {
                "name": name,
                "address": address,
                "website": website,
                "hours": hours,
                "yesCount": 0,
                "noCount": 0
            }

            results.push(c);
            count++;
        }
        // results = results.concat(b);
    }

    // update database
    await Outing.findOneAndUpdate(
        { joinCode: joinCode.value },
        { $set : {locations: results, status:"surveying"}},
    )

    
    res.status(200).json({"results": results, "joinCode": joinCode.value});
}