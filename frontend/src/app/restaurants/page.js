'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchRestaurants() {
          try {
              // Make the POST request to the Overpass API
              const response = await fetch("https://overpass-api.de/api/interpreter", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: "data=" + encodeURIComponent(`
                      [out:json];
                      (
                        node["amenity"="restaurant"](45.519,-73.587,45.537,-73.565);
                        way["amenity"="restaurant"](45.519,-73.587,45.537,-73.565);
                        relation["amenity"="restaurant"](45.519,-73.587,45.537,-73.565);
                      );
                      out geom;
                  `),
              });

              const contentType = response.headers.get("content-type");

              if (contentType && contentType.includes("application/json")) {
                  const data = await response.json();
                  setRestaurants(data.elements || []);
              } else {
                  const text = await response.text();
                  throw new Error(`Received non-JSON response: ${text}`);
              }
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      }

      fetchRestaurants();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

  return (
      <div>
          <h1>Restaurants</h1>
          {restaurants.length > 0 ? (
              <ul>
                  {restaurants.map((restaurant, index) => (
                      <li key={index}>
                          <strong>{restaurant.tags?.name || "Unnamed Restaurant"}</strong>
                          <br />
                          Website: {restaurant.tags?.website || "N/A"}
                          <br />
                          Hours: {restaurant.tags?.opening_hours || "N/A"}
                          <br />
                          Cuisine: {restaurant.tags?.cuisine || "N/A"}
                          <br />
                          Address:  {restaurant.tags && (
                                <>
                                    {restaurant.tags['addr:housenumber'] && <span>{restaurant.tags['addr:housenumber']} </span>}
                                    {restaurant.tags['addr:street'] && <span>{restaurant.tags['addr:street']}</span>}
                                    {restaurant.tags['addr:city'] && <span>, {restaurant.tags['addr:city']}</span>}
                                    {restaurant.tags['addr:postcode'] && <span>, {restaurant.tags['addr:postcode']}</span>}
                                </>
                            )}
                            {!restaurant.tags?.['addr:street'] && <span>Address not available</span>}
                      </li>
                  ))}
              </ul>
          ) : (
              <p>No restaurants found in the area.</p>
          )}
      </div>
  );
}