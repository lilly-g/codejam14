// pages/loginPage.js

'use client';
import React from "react";
//import "./globals.css";

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

// Make sure the component is exported properly
export default function LoginPage() {
    return (
        
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex space-x-8">
                <div className="w-96 p-8 border-4 border-indigo-700 rounded-lg">
                    <NewOutingForm />
                </div>
                <div className="w-96 p-8 border-4 border-indigo-700 rounded-lg">
                    <NewUserForm />
                </div>
                <div className="w-96 p-8 border-4 border-indigo-700 rounded-lg">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
