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
        <div className="font-black">
            <div className="basis-1/3 p-8">
                <h1 className="text-4xl">extinguish inefficiency.</h1>
                <br />
                <p className="font-body">Tired of indecisive planning?</p>
                <br />
                <p className="font-body">Scared to have your ideas shot down?</p>
                <br />
                <p className="font-body">Coordinate group plans with ease using Sociouts' interactive and collaborative selection technology.</p>
                <br />
                <p className="font-body">Join a group, select your area, and start swiping!</p>

            </div>

            <h1 className="text-center">
                <Link href="/logInInfo">
                    Get Started
                </Link>
            </h1>

            <img src="codejam14/frontend/public/images/friendparty.png" alt="friends partying"></img>

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