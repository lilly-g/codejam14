'use client'
import React, { useState, useEffect } from "react";

export default function Slider({j}) {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchOuting = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/fetch', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'joinCode': j }),
                });

                const data = await response.json();
                console.log(data);
                setLocation(data); 
                
            } catch (error) {
                console.error('Failed to fetch outings:', error);
            }
        };

        fetchOuting();
    }, []);


    return (
        <div className="bg-purple-300">
            <div className="flex flex-col h-screen background-color">
                <div className="m-10 space-y-8 p-4 rounded-md flex-grow border-2 border-purple-900 bg-white">
                    <h1 className="font-display">{location?.name || 'Activity name here'}</h1>
                    <div className="font-body space-y-8">
                        <h3>Address: {location?.address || 'N/A'}</h3>
                        <h3>Website: {location?.website || 'N/A'}</h3>
                        <h3>Hours: {location?.hours || 'N/A'}</h3>
                    </div>
                </div>

                {/* Footer with buttons */}
                <div className="flex justify-between items-center p-4 bg-gray-100">
                    <input
                        type="submit"
                        value="No"
                        className="rounded-md border-2 border-red-700 px-6 py-2 cursor-pointer hover:bg-red-700 hover:text-white"
                    />
                    <input
                        type="submit"
                        value="Yes"
                        className="rounded-md border-2 border-green-700 px-6 py-2 cursor-pointer hover:bg-green-700 hover:text-white"
                    />
                </div>
            </div>
        </div>
    );
}