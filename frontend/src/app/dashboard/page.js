'use client'
import "../globals.css";
import { useState, useActionState, useEffect } from "react";
import { submitFormLocation } from "../actions";
import Link from 'next/link';
import Image from "next/image";



export default function Page() {
    const [restaurants, formActionLocation, isPendingLocation] = useActionState(submitFormLocation, []);
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const populateTypes = async () => {
            const response = await fetch('/static/amenities.csv');
            const text = await response.text();

            // split into an array (remove whitespace)
            const rows = text
                .trim()
                .split('\n')
                .map((row) => row.trim());

            setAmenities(rows);
        }
        populateTypes();
    }, []);

    return (
        <div
            style={{
                backgroundImage: "url('/images/party3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "120vh",
                width: "100vw",
            }}
            className="flex justify-center items-center p-8"
        >
            <div className="absolute top-4 right-4">
                <div className="flex items-center bg-purple-200 rounded-lg p-2">
                    <div className="border-2 border-purple-800 rounded-md p-1">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={30}
                            height={30}
                        />
                    </div>
                    <p className="ml-2 text-purple-800">sociouts</p>
                </div>
            </div>

            <div className="bg-purple-100 rounded-lg shadow-lg p-6 max-w-4xl w-full mx-4 mt-12">
                <h2 className="font-display text-2xl py-4 text-center text-purple-900">How far are you willing to go...?</h2>
                <form action={formActionLocation} className="space-y-4">
                    <div>
                        <label
                            htmlFor="postal-code"
                            className="font-body block mb-1 text-slate-700"
                        >
                            Enter your postal code:
                        </label>
                        <input
                            type="text"
                            id="postal-code"
                            name="postal-code"
                            placeholder="A1B 2C3"
                            className="rounded-md border-2 border-slate-300 focus:border-purple-500 w-full p-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="distance"
                            className="font-body block mb-1 text-slate-700"
                        >
                            Radius (km):
                        </label>
                        <input
                            type="number"
                            id="distance"
                            name="distance"
                            defaultValue="5"
                            className="rounded-md border-2 border-slate-300 focus:border-purple-500 w-full p-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="amenity-type"
                            className="font-body block mb-1 text-slate-700"
                        >
                            Type of outing:
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <span>
                                <input
                                    type="checkbox"
                                    id="restaurant"
                                    name="types"
                                    value="restaurant"
                                    defaultChecked={true}
                                    className="rounded border-slate-400 focus:ring-purple-500"
                                />
                                <label className="font-body ml-2" htmlFor="restaurant">Restaurant</label>
                            </span>
                            
                            {amenities.map((a, i) => (
                                <span key={i}>
                                    <input
                                        type="checkbox"
                                        id={a}
                                        name="types"
                                        value={a}
                                        className="rounded border-slate-400 focus:ring-purple-500"
                                    />
                                    <label className="font-body ml-2" htmlFor={a}>{a}</label>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="rounded-md border-2 border-purple-500 text-purple-500 my-2 px-6 py-2 cursor-pointer hover:bg-purple-500 hover:text-white transition-colors"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
    
}