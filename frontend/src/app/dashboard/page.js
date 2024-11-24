'use client'
import "../globals.css";
import { useState, useActionState, useEffect } from "react";
import { submitFormLocation } from "../actions";

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
        <div className="">
            <h2 className="font-display text-3xl py-2">How far are you willing to go...?</h2>
            <form action={formActionLocation} className="w-2/4 px-2">
                <div>
                    <label
                        htmlFor="postal-code"
                        className="font-body block mb-2"
                    >
                        Enter your postal code:
                    </label>
                    <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        placeholder="A1B 2C3"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="distance"
                        className="font-body block mb-2"
                    >
                        Radius (km):
                    </label>
                    <input
                        type="number"
                        id="distance"
                        name="distance"
                        defaultValue="5"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="amenity-type"
                        className="font-body block mb-2"
                    >
                        Type of outing:
                    </label>

                    <div className="columns-4">
                        <span>
                            <input type="checkbox" id="restaurant" name="types" value="restaurant" defaultChecked={true}
                                className="size-4 rounded border-slate-600 m-1 focus:ring-slate-600" />
                            <label className="font-body" htmlFor="restaurant">restaurant</label>
                            <br />
                        </span>

                        {amenities.map((a, i) => (
                            <span key={i}>
                                <input type="checkbox" id={a} name="types" value={a}
                                    className="size-4 rounded border-slate-600 m-1 focus:ring-slate-600" />
                                <label className="font-body" htmlFor={a}>{a}</label>
                                <br />
                            </span>
                        ))}
                    </div>

                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="rounded-md border-2 border-slate-800 my-2 px-4 p-2 cursor-pointer hover:bg-slate-800 hover:text-white"
                />
            </form>
            <ul>
                {restaurants.map((a, i) => (
                    <li key={i}>
                        <strong>{a.name || "Unnamed Restaurant"}</strong>
                        <br />
                        Address: {a.address}
                        <br />
                        Hours: {a.hours}
                        <br />
                        Website: {a.website}
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}