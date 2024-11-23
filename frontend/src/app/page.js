'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react';





export default function Page() {


  return (
    <div>
      <div>

        <h1>sociouts</h1>

        <p>Great and easy tool to plan your social outings with friends!</p>
        <p>Don't worry about difficult decision making!</p>
        <p>{data}</p>

      </div>
      <div>

      </div>

      <div>
        <form action={sendPostRequest}>
          <InputBox label={"first number"} />
          <InputBox label={"second number"} />
          <input type="submit" value="hi" />
        </form>


      </div>
    </div>


  );





  /*const [message, setMessage] = useState("Loading")

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

  )*/
}