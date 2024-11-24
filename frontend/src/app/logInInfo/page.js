import React from "react";
import Image from "next/image";
import Link from 'next/link';
//import "./globals.css";

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

// Make sure the component is exported properly
export default function LoginPage() {
    return (
        <div 
            style={{
                backgroundImage: "url('/images/party3.png')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
            }}
        >
            <div className="flex items-center pl-2 pt-2 bg-purple-200 pb-2">
                <div className="border-2 border-purple-800">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={30} 
                        height={30}
                    />
                </div>
                <button className="font-display text-purple-900 pl-2">
                    <Link href="../" className="btn btn-blue">
                        sociouts
                    </Link>
                </button>
            </div>

            <div className="min-h-screen flex items-center justify-center">
                <div className="flex space-x-8">
                    <div className="w-96 p-8 border-4 border-purple-900 rounded-lg bg-purple-50">
                        <NewOutingForm />
                    </div>
                    <div className="w-96 p-8 border-4 border-purple-900 rounded-lg bg-purple-50">
                        <NewUserForm />
                    </div>
                    <div className="w-96 p-8 border-4 border-purple-900 rounded-lg bg-purple-50">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
