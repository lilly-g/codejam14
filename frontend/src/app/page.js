import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from 'next/link';

export default function Page() {
    return (
      <div className="relative font-display text-lg h-screen">
          <div className="relative z-50 flex items-center pl-2 pt-2">
                <div className="border-2 border-purple-800">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={30} 
                        height={30}
                    />
                </div>
                    <p>
                        sociouts
                    </p>
            </div>

          <img 
              src="/images/party3.png" 
              alt="friends partying" 
              className="absolute top-0 left-0 w-full h-full object-cover shadow-md opacity-100 transition-opacity duration-1000 hover:opacity-80"
          />
          <div className="relative z-10 flex justify-center items-center h-full">
            <div className="relative z-10 bg-white bg-opacity-80 rounded-lg p-8 m-10 w-1/2 max-w-3xl">

            <div className="relative z-50 flex items-start justify-end -mt-3 -mr-3">
              <div className="border-2 border-purple-800">
                  <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={30} 
                      height={30}
                  />
              </div>
              <p className="pl-2">sociouts</p>
            </div>

            <br></br>


                <h1 className="text-4xl mb-6">extinguish inefficiency.</h1>
                <p className="font-body mb-4">Tired of indecisive planning?</p>
                <p className="font-body mb-4">Scared to have your ideas shot down?</p>
                <p className="font-body mb-4">Coordinate group plans with ease using interactive and collaborative selection technology.</p>
                <p className="font-body mb-4">Join a group, select your area, and start swiping!</p>

                <div className="relative z-10 flex justify-center items-center h-full">
                  <button className="bg-purple-900 hover:bg-purple-700 text-white font-body py-2 px-4 rounded mt-4">
                      <Link href="/logInInfo" className="btn btn-blue">
                          Get Started
                      </Link>
                  </button>
                </div>
            </div>
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