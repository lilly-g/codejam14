'use client';
import React from "react";

export default function SliderPage() {
    return(
        <body className="bg-purple-300">
            <div className="flex flex-col h-screen background-color">
                <div className="m-10 space-y-8 p-4 rounded-md flex-grow border-2 border-purple-900 bg-white">
                    <h1 className="font-display">Activity name here</h1>
                    <div className="font-body space-y-8">
                        <h3>Address: </h3>
                        <h3>Website: </h3>
                        <h3>Hours: </h3>
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
        </body>
    );
}