'use client'
import React from "react";
import "./globals.css";
import Link from 'next/link';

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

export default function Page() {

    return (
      <div className="font-display text-lg flex flex-col justify-start h-screen border-violet-900">
          <img src="/images/party3.png" alt="friends partying" className="w-full h-1/2 object-cover shadow-md opacity-100 transition-opacity duration-1000 hover:opacity-80" />
        <div className="basis-1/3 pl-10">
            <br />
            <h1 className="text-4xl">extinguish inefficiency.</h1>
            <br />
            <p className="font-body">Tired of indecisive planning?</p>
            <br />
            <p className="font-body">Scared to have your ideas shot down?</p>
            <br />
            <p className="font-body">Coordinate group plans with ease using interactive and collaborative selection technology.</p>
            <br />
            <p className="font-body">Join a group, select your area, and start swiping!</p>
            <br />
        </div>
        
        <button className="bg-purple-900 hover:bg-purple-700 text-white font-body py-2 px-3 object-center">
            <Link href="/logInInfo" className="btn btn-blue">
                Get Started
            </Link>
        </button>
    </div>
  
    );

}

/* export default function Home() {
    const [message, setMessage] = useState("Loading")
  
    useEffect(() => {
      fetch("http://localhost:8080/").then(
        response => response.json()
      ).then(
        data => {
          console.log(data)
          setMessage(data.message)
        }
      )
    }, [])
    return(
      <div>{message}</div>
  
    )
} */