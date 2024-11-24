// pages/loginPage.js

'use client';
import React from "react";
import Image from "next/image";
//import "./globals.css";

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

// Make sure the component is exported properly
export default function LoginPage() {
    return (
        <div className="bg-purple-300">
            <div className="flex items-center pl-2 pt-2">
                <div className="border-2 border-purple-800">
                    <Image
                        src="/images/logo.png"
                        alt="Example Image"
                        width={30} 
                        height={30}
                    />
                </div>
                <p className="font-display text-purple-900 pl-2">sociouts</p>
            </div>

            <div className="min-h-screen flex items-center justify-center">
                <div className="flex space-x-8">
                    <div className="w-96 p-8 border-4 border-purple-800 rounded-lg bg-purple-50">
                        <NewOutingForm />
                    </div>
                    <div className="w-96 p-8 border-4 border-purple-800 rounded-lg bg-purple-50">
                        <NewUserForm />
                    </div>
                    <div className="w-96 p-8 border-4 border-purple-800 rounded-lg bg-purple-50">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
