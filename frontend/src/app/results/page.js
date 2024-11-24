'use client'
import React from "react";
import Link from 'next/link';

export default function Page(first, second, third) {

    return (
        <div className="flex flex-col items-center space-y-8 bg-purple-100 min-h-screen">
            <div className="text-center">
                <br />
                <br />
                <h1 className="font-display text-3xl text-purple-900">the results are out.</h1>
                <p className="text-lg text-purple-900">here are your top three.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 p-8">
                <div className="bg-purple-900 rounded-lg shadow-lg p-8 h-150 overflow-auto">
                    <h2 className="text-white text-2xl font-bold mb-4">Sammi & Soupe Dumpling</h2>
                    <p className="text-white">Simply appointed space known for a variety of soup dumplings, along with noodles & Chinese beers.</p>
                    <img src="/images/sammi.png" alt="place1" className="mt-4 rounded-md" />
                </div>

                <div className="bg-purple-700 rounded-lg shadow-lg p-8 h-150 overflow-auto">
                    <h2 className="text-white text-2xl font-bold mb-4">Chef on Call</h2>
                    <p className="text-white">Homestyle food for delivery, take-out, or to eat in a casual room with wood accents & subway tiles.</p>
                    <img src="/images/chefoncall.png" alt="place2" className="mt-4 rounded-md" />
                </div>

                <div className="bg-purple-900 rounded-lg shadow-lg p-8 h-150 overflow-auto">
                    <h2 className="text-white text-2xl font-bold mb-4">Kinton Ramen</h2>
                    <p className="text-white">We deliver an exceptional dining experience with fresh ingredients and high-quality noodles and broths.</p>
                    <img src="/images/kinton.png" alt="place3" className="mt-4 rounded-md" />
                </div>
            </div>

            <button className="bg-purple-900 hover:bg-purple-700 text-white font-body py-2 px-3 object-center rounded-md">
                <Link href="/logInInfo" className="btn btn-blue">
                    Create a new group
                </Link>
            </button>

        </div>
    );
}