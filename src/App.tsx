import Navbar from "./Components/Navbar"
import HomePage from './Components/HomePage.tsx'
import { useEffect, useRef, useState } from 'react'
import { animate, motion } from "motion/react"

function App() {
    const imgRef = useRef(null)
    const [banner_timer, setBanner_timer] = useState(0)

    const banner_animation_time = 10


    // useEffect(() => {
    //
    //     const interval = setInterval((prevSecond: number) => {
    //         console.log("interval ran")
    //         animate(".banner-image", {
    //             y: 0
    //         }, {
    //             duration: banner_animation_time,
    //             repeat: Infinity,
    //             ease: "easeInOut"
    //         })
    //
    //     }, banner_animation_time * 1000)
    //
    //     return () => {
    //         clearInterval(interval)
    //     }
    //
    //     // const img = document.querySelectorAll(".banner-image")
    //     // console.log(document.querySelector(".banner-image"))
    //     // console.log(img)
    //     // if (img.length) {
    //     //     animate(".banner-image", { y: 0 }, { duration: 30, ease: "easeInOut" })
    //     // }
    // }, [])

    return (
        <main className="w-screen h-full bg-black text-white">
            <div className="relative h-10 lg:h-30 flex items-start justify-center overflow-hidden">
                <motion.img
                    ref={imgRef}
                    className="banner-image bg-red-200 w-[80vw]"
                    src="/ascii-art.png"
                    initial={{ y: "-50%" }}
                    animate={{ y: "0%" }}
                    transition={{
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                // initial={{ y: "-50%" }}
                // animate={{ y: ["-50%", "0%", "-50%"] }}   // <-- back & forth loop
                // transition={{
                //   duration: 8,        // total time for the full cycle
                //   ease: "easeInOut",
                //  repeat: Infinity,   // loop forever
                // }}
                // initial={{
                //     y: "-50%"
                // }}
                //
                // transition={{
                //     duration: banner_animation_time,
                //     repeat: Infinity
                //
                // }}
                //
                // animate={{
                //     y: 0
                // }}
                ></motion.img>
            </div>

            <Navbar></Navbar>
            <HomePage></HomePage>


        </main>
    )
}

export default App
