'use client'
import React from "react";
import { useActionState } from "react";
import { submitForm } from "./actions";

export default function Page() {

    const [message, formAction, isPending] = useActionState(submitForm, "");

    return (
        <div>
            <div>
                <h1>sociouts</h1>

                <p>Great and easy tool to plan your social outings with friends!</p>
                <p>Don't worry about difficult decision making!</p>

            </div>

            <div>
                <h2>Create a new group</h2>
                <form>
                    <label htmlFor="new-group-name">Group name:</label>
                    <input type="text" id="new-group-name" name="new-group-name"></input>
                    <label htmlFor="new-admin-name">Username:</label>
                    <input type="text" id="new-admin-name" name="new-admin-name"></input>
                    <label htmlFor="new-admin-pass">Password:</label>
                    <input type="text" id="new-admin-pass" name="new-admin-pass"></input>
                    <input type="submit" value="Create" />
                </form>
            </div>

            <div>
                <h2>Join a group</h2>
                <form>
                    <label htmlFor="join-code">Join code:</label>
                    <input type="text" id="join-code" name="join-code"></input>
                    <label htmlFor="new-user-name">Username:</label>
                    <input type="text" id="new-user-name" name="new-user-name"></input>
                    <label htmlFor="new-user-pass">Password:</label>
                    <input type="text" id="new-user-pass" name="new-user-pass"></input>
                    <input type="submit" value="Join" />
                </form>
            </div>

            <div>
                <h2>Log in to existing group</h2>
                <form action={formAction}>
                    <label htmlFor="group-code">Join code:</label>
                    <input type="text" id="group-code" name="group-code"></input>
                    <label htmlFor="name">Username:</label>
                    <input type="text" id="name" name="name"></input>
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id="pass" name="pass"></input>
                    <input type="submit" value="Log in" />
                </form>

                <p>{isPending ? "Loading..." : message}</p>
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