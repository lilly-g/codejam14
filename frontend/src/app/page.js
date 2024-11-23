'use client'
import React from "react";
import "./globals.css";

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

export default function Page() {

    return (
        <div className="flex flex-row content-center">
            <div className="basis-1/3 p-8">
                <h1 className="font-display text-6xl">sociouts</h1>
                <br />
                <p className="font-body">A fun and easy tool to decide where to go with friends!</p>
                <br />
                <p className="font-body">Specify the distance, "swipe" left or right for each (like your favourite dating app), and sociouts will give you the top 3 choices.</p>

            </div>

            <div className="basis-2/3 p-8">
                <NewOutingForm />
                <NewUserForm />
                <LoginForm />
            </div>

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