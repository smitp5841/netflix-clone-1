import { useState } from "react"
import { Link } from "react-router-dom"


const AuthScreen = () => {
    const [email,setEmail] = useState("");

  return (
    <div className="hero-bg relative">

        {/* navbar */}

        <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10" >
         <img src="/netflix-logo.png" alt="netflix logo" className="w-32 md:w-52" />
         <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded" >
         Sign in
         </Link>
        </header>

        {/* hero section */}
        <div className="flex flex-col items-center justify-center text-center  py-40 text-white  max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4"> unlimited movies, tv shows,and more</h1>
            <p className="text-lg mb-4"> watch anytime cancel anytime.</p>
            <p className="mb-4">ready to watch? enter your email to create or restart your membershio.</p> 

            <form className=" flex flex-col md:flex-row gap-4 w-1/2">
            
                       
                        <input type="email" className="p-2 rounded flex-1 bg-black/80 border border-gray-700 " placeholder="email address"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)} />
                        <button className="bg-red-600 text-xl lg:text-2xl lg:px-6 px-2 py-1 md:py-2 rounded flex justify-center items-center">
                            Get Started
                            <chevronRight className="size-8 md:size-10"/>
                        </button>
                    
            </form>

        </div>

        {/* separator */}

        <div className="h-2 w-full bg-[#232323] aria-hidden='true ' " />

        <div className="py-10 bg-black text-white">
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold mb-4 md:text-5xl">Enjoy on your tv</h2>
                    <p className="text-lg md:text-xl">
                        watch on smart tvs playstation,xbox,chromecast,apple tv,blu-ray player,and more.
                        
                    </p>
                     
                </div>
                <div className="flex-1 relative  ">
                    <img src="/tv.png" alt="tv image"  className="mt-4 z-20 relative" />
                    <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10" playsInline autoPlay={true}
                    loop={true} muted={true}>
                        <source  src="/hero-vid.m4v" type="video/mp4"/>
                    </video>
                </div>

            </div>

        </div>

        
    </div>
  )
}

export default AuthScreen
