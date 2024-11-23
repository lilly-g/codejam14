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
        <div className="basis-2/3 p-8">
            <NewOutingForm />
            <NewUserForm />
            <LoginForm />
        </div>
    );
}
