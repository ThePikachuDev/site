import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiOutlineDiscord,
} from "react-icons/ai";
import { motion } from "motion/react"
import Tooltip from "./Tooltip";
import { useEffect, useState } from "react";


const HomePage = () => {
    const birthDate = new Date("2007-08-23T00:00:00");

    const [hours, setHours] = useState(0);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const diffMs = now.getTime() - birthDate.getTime();
            const diffHours = diffMs / (1000 * 60 * 60);
            setHours(diffHours);
        };

        update(); // initial run
        const interval = setInterval(update, 1000); // update every second

        return () => clearInterval(interval);
    }, []);



    return (
        <main className="w-screen min-h-80 pt-5 flex items-top justify-center">
            <div className="w-[80%] h-[70%] flex items-center border-white">
                <div className="w-1/2 h-full p-3 py-10 flex items-center justify-center">
                    {/* <div className="flex flex-col items-center justify-between"> */}

                    <div className="text-[5.5px] lg:text-[14px] text-center">
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⠁⠀⠀⠙⢿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠈⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠁⢠⣾⣶⣦⠀⢸⣿⣿⢠⣾⣿⣶⡀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⣿⣿⣿⠤⠘⠀⠘⠼⣿⣿⣿⡇⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⡀⢹⠟⠁⠀⠀⠀⠀⠀⠈⠙⢟⣁⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠖⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣦⡘⠢⠤⠤⠤⠤⠤⠒⠉⠁⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠟⠉⠢⣄⣢⠐⣄⠠⣄⢢⣼⠞⠉⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⡟⠀⠀⠀⠀⠉⠙⠚⠓⠊⠉⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀
                        ⠀⠀⠀⢀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀
                        ⠀⠀⠀⡰⠉⠈⠑⠠⢀⢸⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀
                        ⠀⠀⠀⡇⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⠿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠘⢿⣿⣿⡇⠀⠀⠀
                        ⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀⠀
                        ⠀⠀⢰⠃⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠘⣿⣿⣿⣿⣿⡟⠁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡇⠀⠀⠀
                        ⠀⡠⠊⠀⢀⠐⡀⠈⠄⠂⡐⠀⢂⠐⠈⠠⢀⠀⠀⢻⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⢀⠛⡛⢫⠑⡄⢃⡐⢈⠐⡀⠄⠐⠀⠀⠀⠀⠈⢿⡇⠂⠀⠀
                        ⢠⢁⠀⠄⢂⡐⠠⡁⠌⡐⠠⢁⠂⠌⢠⢁⠂⡐⠀⠘⣿⣳⢤⡀⡀⢀⠀⡀⢀⠀⡀⠠⡀⠤⣁⢿⠀⠄⣂⠑⡂⠥⡘⢠⠐⢂⠰⠀⠌⡐⢈⠐⡀⠀⠀⠀⠑⢄⠀⠀
                        ⠈⢧⡘⡐⢂⠤⠑⡠⢁⠆⡁⠆⠌⣂⠁⡂⠌⡐⠀⠀⢹⣿⣷⣧⣝⣢⠱⡰⣈⢆⢡⢃⠴⡱⣌⣾⠈⡐⢠⠘⡠⢁⠆⡡⢘⠠⡁⠎⡐⡈⢄⠢⢀⠡⢀⠈⠂⠀⠑⡀
                        ⠀⠀⠙⢵⣊⠴⡁⢆⠡⢂⠅⡊⠔⡠⠘⢄⠒⡀⢁⠀⠀⢻⣿⣿⣿⣿⣿⣷⣷⣾⣶⣿⣾⣿⣿⣿⠀⠐⡄⠢⢁⠆⡘⢄⠡⢂⠱⢠⠑⡨⢄⠢⣁⠒⡄⢊⠄⣂⢀⡡
                        ⠀⠀⠀⠀⠉⠲⣍⢢⠱⡈⢆⠱⡈⠔⡉⢄⠒⠄⢂⠀⢀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠂⢄⠣⠌⣂⠱⡈⢆⠡⢊⠄⢣⠐⢢⠑⡄⢣⡘⢆⡳⣬⠞⠁
                        ⠀⠀⠀⢀⠀⠀⠈⢣⡞⡰⢈⠆⡱⢈⠔⡨⢘⡈⠆⢌⠀⡐⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠠⢉⠄⢢⠑⡄⢣⠘⡄⠣⢌⢊⡔⡉⢦⠩⡜⣡⢞⡷⠋⠁⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠙⢶⡉⢆⡱⢈⠆⡑⠢⢌⡘⢄⠣⡐⣡⠏⠉⠉⠉⠉⠉⠉⠉⠉⠍⠉⠉⢳⢁⠊⡜⢠⠃⡜⢠⠃⣌⠱⣈⠦⢰⡉⢆⡳⣼⠟⠁⠀⠀⡆⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠹⣖⡰⢃⡜⢄⠳⣠⠚⣌⠖⣥⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣎⠴⡈⢆⠱⡈⢆⠱⡠⢃⠖⣌⠣⣜⢣⠟⠁⠀⠀⠀⠀⠃⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢯⡼⣬⣓⣦⣟⣼⡿⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣶⣉⢆⠳⡌⡜⢢⠱⡩⢜⣤⢻⡼⠋⠀⠀⢸⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠉⠙⠛⠛⠋⠉⠀⡀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢾⣳⣼⣜⣧⣳⡽⣞⠞⠋⠀⠀⠀⠀⠒⠀⠀⠀⠀⠀⠀
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠈⠉⣉⢉⣉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    </div>

                    {/* <img */}
                    {/*     className="h-40 " */}
                    {/*     src="https://avatars.githubusercontent.com/ThePIkachuDev" */}
                    {/* ></img> */}
                    {/* </div> */}
                    {/* (｡˃ ᵕ ˂ )⸝♡⸜(｡˃ ᵕ ˂ )⸝♡⸜(｡˃ ᵕ ˂ ) */}
                </div>
                <div className="w-1/2 h-fit relative p-4 lg:pr-8  divide-y divide-gray-800 divide-solid">
                    <h1 className="py-2 tracking-wider lg:py-6 lg:text-5xl">
                        {"> "} Meharwan Singh{" "}
                        <span className="text-gray-500">( @ThePIkachuDev )</span>
                    </h1>
                    <h2 className="py-2 tracking-wider lg:py-6 lg:text-4xl text-gray-300">
                        {" "}
                        {"-  "}
                        <Tooltip tooltip="i code :)">
                            Programmer
                        </ Tooltip> ,
                        {" "}
                        <Tooltip tooltip="i use linux everyday, no windows">
                            linux user
                        </Tooltip> ,
                        {" "}
                        <Tooltip tooltip={`${Math.floor(hours).toLocaleString()} hrs`}>
                            18yrs old
                        </Tooltip> ,
                        {" "}
                        <Tooltip tooltip={`https://hackclub.com/`}>
                            Hackclubber{" "}
                        </Tooltip> ,
                    </h2>

                    <h3 className="py-2 lg:py-6 lg:text-3xl text-neutral-400 text-[15px] tracking-wider lg:tracking-wider">
                        hiii, I am a highschool computer science student living in India who
                        loves to code and try new things in life. I especially love linux (
                        and its eco system ) , studying maths and spending time in peace.{" "}
                    </h3>

                    <div className="contact_links flex gap-1 lg:gap-2 ">
                        <Tooltip tooltip={`github.com/ThePikachuDev`}>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://github.com/ThePikachuDev"
                                className="underline underline-offset-2 tracking-widest lg:text-4xl flex items-center gap-1 border border-zinc-700 w-fit p-1 hover:text-zinc-400 "
                            >

                                <AiFillGithub />
                                github
                            </a>
                        </Tooltip>

                        <Tooltip tooltip={`@ThePikachuDev`}>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://discordapp.com/users/1237395043669639233"
                                className="underline underline-offset-2 lg:text-4xl flex items-center gap-1 border border-zinc-700 w-fit p-1 hover:text-zinc-400"
                            >
                                <AiOutlineDiscord /> discord
                            </a>
                        </Tooltip>

                        <Tooltip tooltip={`x.com/ThePikachuDev`}>
                            <a

                                target="_blank" rel="noopener noreferrer"
                                href="https://x.com/ThePikachuDev"
                                className="underline underline-offset-2 lg:text-4xl flex items-center gap-1 border border-zinc-700 w-fit p-1 hover:text-zinc-400"
                            >
                                <AiFillTwitterCircle /> X (twitter)
                            </a>
                        </Tooltip>

                        {/* <Tooltip tooltip="This is some info"> */}
                        {/*     <motion.div className="text-5xl "> */}
                        {/*         tooltip text */}
                        {/*     </motion.div> */}
                        {/* </Tooltip> */}

                        {/* <motion.div */}
                        {/*     className="bg-green-300 text-5xl relative" */}
                        {/*     onHoverStart={() => console.log('Hover starts')} */}
                        {/*     onHoverEnd={() => console.log('Hover ends')} */}
                        {/* > */}
                        {/*     tooltip text */}
                        {/**/}
                        {/*     <div className="absolute -top-full w-full bg-red-200 text-center"> */}
                        {/*         some info */}
                        {/*     </div> */}
                        {/* </motion.div> */}

                    </div>

                    {/* <div className="border h-30 flex "> */}
                    {/*     <motion.div className="bar h-full w-10 bg-red-300 " */}
                    {/*         animate={{ */}
                    {/*             height: "100%" */}
                    {/*         }} */}
                    {/**/}
                    {/*         transition={{ */}
                    {/*             duration: 2, */}
                    {/*             ease: "easeInOut", */}
                    {/**/}
                    {/*         }} */}
                    {/**/}
                    {/*         initial={{ */}
                    {/*             height: 0 */}
                    {/*         }} */}
                    {/*     ></motion.div> */}
                    {/*     <div className="bar h-full w-10 bg-green-300 "></div> */}
                    {/*     <div className="bar h-full w-10 bg-red-300 "></div> */}
                    {/*     <div className="bar h-full w-10 bg-zinc-300 "></div> */}
                    {/*     <div className="bar h-full w-10 bg-gray-700 "></div> */}
                    {/*     <div className="bar h-full w-10 bg-red-900 "></div> */}
                    {/*     <div className="bar h-full w-10 bg-red-400 "></div> */}
                    {/* </div> */}
                </div>
            </div>
        </main>
    );
};

export default HomePage;
