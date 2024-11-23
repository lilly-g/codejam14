import fetch from 'node-fetch';

async function convertToCoordinates(postalCode) {
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&format=json&addressdetails=1&limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'YourAppName/1.0' //what do we put here
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract latitude and longitude from the response
        if (data.length > 0) {
            const location = {
                lat: data[0].lat,
                lon: data[0].lon
            };
            //console.log(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
            return location;
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
    }
}

async function interpretLocation(postalCode, userRangekm, useramenity) {
    try {
        //constants for conversion
        const kmToLongitude = 111.320;
        const kmToLatitude = 111.321;

        //variable for user's postal code and desired range
        let userlocation; //stores the lat/long from convertToCoordinates
        //stores the conversion of range to lat/long
        let rangeLatitude;
        let rangeLongitude;
        //the final lat/longs we send to fetchRestaurants
        let coordinates = new Array(4);

        //calculate user's latitude/longitude range
        userlocation = await convertToCoordinates(postalCode);
        //convert the range to coordinates
        rangeLatitude = userRangekm/kmToLatitude;
        rangeLongitude = userRangekm/(kmToLongitude * Math.cos(rangeLatitude));
        //console.log(userlocation.lon + " " + userRangekm);
        //calculate the final lat/long to send to fetchRestaurants (search range)
        coordinates[3] = Number(userlocation.lon) + Number(rangeLongitude);
        coordinates[2] = userlocation.lon - rangeLongitude;
        coordinates[1] = Number(userlocation.lat) + Number(rangeLatitude);
        coordinates[0] = userlocation.lat - rangeLatitude;

        //console.log("hello " + coordinates[0] + " " + coordinates[1] + " " + coordinates[2] + " " + coordinates[3]);

        //if success, call fetchRestaurants (or turn getRestaurants to more general name and make restaurants a var)
        fetchAmenity(coordinates, useramenity);

    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
}

async function fetchAmenity(coordinates, useramenity) {
    try {
        // Make the POST request to the Overpass API
        const response = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "data=" + encodeURIComponent(`
                [out:json];
                (
                    node["amenity"=${useramenity}](${coordinates[0]},${coordinates[2]},${coordinates[1]},${coordinates[3]});
                    way["amenity"=${useramenity}](${coordinates[0]},${coordinates[2]},${coordinates[1]},${coordinates[3]});
                    relation["amenity"=${useramenity}](${coordinates[0]},${coordinates[2]},${coordinates[1]},${coordinates[3]});
                );
                out geom;
            `)
        });

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.log("Fetched amenity data:", JSON.stringify(data, null, 2));
        } else {
            const text = await response.text();
            console.error("Received non-JSON response:", text);
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }
}

// Call the function using postal code and radius in km
//interpretLocation("H3A 2L9", 5, "bank");