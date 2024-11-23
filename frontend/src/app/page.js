'use client'
import React from "react";

// components
import NewOutingForm from "@/components/NewOutingForm";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm";

export default function Page() {

    return (
        <div className="columns-2">
            <div className="break-after-column">
                <h1 className="font-display">sociouts</h1>

                <p>Fun and easy tool to decide where to go with friends!</p>
                <p>Simply add the options, "swipe" left or right (like your favourite dating app) for each, and sociouts will give you the top 3 choices.</p>

            </div>

            <div>
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