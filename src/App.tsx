import Navbar from "./Components/Navbar"
import HomePage from './Components/HomePage.tsx'
import { useEffect, useRef } from 'react'
import { animate, motion } from "motion/react"

function App() {
    const imgRef = useRef(null)


    useEffect(() => {
        const img = document.querySelectorAll(".banner-image")
        console.log(document.querySelector(".banner-image"))
        console.log(img)
        if (img.length) {
            // animate(".banner-image", { y: 0 }, { duration: 30, ease: "easeInOut" })
        }

    }, [])

    return (
        <main className="w-screen h-full bg-black text-white">
            <div className="relative h-[14vw] flex items-start justify-center overflow-hidden">
                <motion.img
                    ref={imgRef}
                    className="banner-image bg-red-200 w-[80vw]"
                    src="/ascii-art.png"
                    initial={{
                        y: -300
                    }}

                    transition={{
                        duration: 40,
                        repeat: Infinity

                    }}
                ></motion.img>
                <img src="../public/japan-bridge.png"
                    className="absolute -top-70 bg-red-200 h-fit scale-90 "

                ></img>
            </div>

            <Navbar></Navbar>
            <HomePage></HomePage>


        </main>
    )
}

export default App
