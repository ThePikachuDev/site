import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiOutlineDiscord,
} from "react-icons/ai";
import { useEffect, useState, type ReactNode } from "react";

type TooltipProps = {
    tooltip: string;
    children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ tooltip, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white text-white text-xs whitespace-nowrap z-10">
                    {tooltip}
                </span>
            )}
        </span>
    );
};

// const Tooltip = ({ tooltip, children }) => {
//     const [isVisible, setIsVisible] = useState(false);
//
//     return (
//         <span
//             className="relative inline-block"
//             onMouseEnter={() => setIsVisible(true)}
//             onMouseLeave={() => setIsVisible(false)}
//         >
//             {children}
//             {isVisible && (
//                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-white text-white text-xs whitespace-nowrap z-10">
//                     {tooltip}
//                 </span>
//             )}
//         </span>
//     );
// };

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

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="w-full min-h-screen pt-3 sm:pt-5 md:pt-8 flex items-start justify-center px-2 sm:px-4">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-4 lg:p-6">
                    <img
                        src="public/ascii-animation.gif"
                        alt="image"
                        className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-full h-auto"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 px-3 sm:px-4 lg:px-6 divide-y divide-gray-800">
                    {/* Name */}
                    <h1 className="py-3 sm:py-4 lg:py-6 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl tracking-wide sm:tracking-wider break-words">
                        {"> "} Meharwan Singh{" "}
                        <span className="text-gray-500 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
                            (@ThePikachuDev)
                        </span>
                    </h1>

                    {/* Description */}
                    <h2 className="py-3 sm:py-4 lg:py-6 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wide sm:tracking-wider text-gray-300">
                        <Tooltip tooltip="i code :)">
                            <span className="cursor-help">Programmer</span>
                        </Tooltip>
                        {", "}
                        <Tooltip tooltip="i use linux everyday, no windows">
                            <span className="cursor-help">linux user</span>
                        </Tooltip>
                        {", "}
                        <Tooltip tooltip={`${Math.floor(hours).toLocaleString()} hrs`}>
                            <span className="cursor-help">18yrs old</span>
                        </Tooltip>
                        {", "}
                        <Tooltip tooltip="https://hackclub.com/">
                            <span className="cursor-help">Hackclubber</span>
                        </Tooltip>
                    </h2>

                    {/* Bio */}
                    <h3 className="py-3 sm:py-4 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-400 tracking-wide sm:tracking-wider leading-relaxed">
                        hi, I am a highschool computer science student living in India who
                        loves to code and try new things in life. I especially love linux (
                        and its eco system ), studying maths and spending time in peace.
                    </h3>

                    {/* Contact Links */}
                    <div className="py-3 sm:py-4 lg:py-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                        <Tooltip tooltip="github.com/ThePikachuDev">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/ThePikachuDev"
                                className="underline underline-offset-4 sm:underline-offset-8 tracking-wider flex items-center gap-1 sm:gap-2 border border-zinc-700 w-fit px-2 py-1 sm:px-3 sm:py-1.5 hover:text-zinc-400 transition-colors"
                            >
                                <AiFillGithub className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" />
                                <span>github</span>
                            </a>
                        </Tooltip>

                        <Tooltip tooltip="@ThePikachuDev">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://discordapp.com/users/1237395043669639233"
                                className="underline underline-offset-4 sm:underline-offset-8 tracking-wider flex items-center gap-1 sm:gap-2 border border-zinc-700 w-fit px-2 py-1 sm:px-3 sm:py-1.5 hover:text-zinc-400 transition-colors"
                            >
                                <AiOutlineDiscord className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" />
                                <span>discord</span>
                            </a>
                        </Tooltip>

                        <Tooltip tooltip="x.com/ThePikachuDev">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/ThePikachuDev"
                                className="underline underline-offset-4 sm:underline-offset-8 tracking-wider flex items-center gap-1 sm:gap-2 border border-zinc-700 w-fit px-2 py-1 sm:px-3 sm:py-1.5 hover:text-zinc-400 transition-colors"
                            >
                                <AiFillTwitterCircle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" />
                                <span>X (twitter)</span>
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;

// import {
//     AiFillGithub,
//     AiFillTwitterCircle,
//     AiOutlineDiscord,
// } from "react-icons/ai";
// import Tooltip from "./Tooltip";
// import { useEffect, useState } from "react";
//
//
// const HomePage = () => {
//     const birthDate = new Date("2007-08-23T00:00:00");
//
//     const [hours, setHours] = useState(0);
//
//     useEffect(() => {
//         const update = () => {
//             const now = new Date();
//             const diffMs = now.getTime() - birthDate.getTime();
//             const diffHours = diffMs / (1000 * 60 * 60);
//             setHours(diffHours);
//         };
//
//         update(); // initial run
//         const interval = setInterval(update, 1000); // update every second
//
//         return () => clearInterval(interval);
//     }, []);
//
//
//
//     return (
//         <main className="max-w-screen min-h-80 pt-5 flex items-top justify-center">
//             <div className="max-w-screen lg:w-[80%] h-[70%] flex items-center border-white">
//                 <div className="hidden sm:w-1/2 h-full p-3 py-10 sm:flex items-center justify-center">
//                     {/* <div className="flex flex-col items-center justify-between"> */}
//
//
//                     {/* <div className="bg-green-300 w-full h-[50vh]"> */}
//                     {/**/}
//                     {/**/}
//                     {/* </div> */}
//
//                     <img src="public/ascii-animation.gif" alt="image" className="w-[40vw]" />
//                     {/* <img src="/gallery/a-red-colored-temple.webp" /> */}
//                     {/* <div className="text-[5.5px] lg:text-[10px] xl:text-[9px] text-center"> */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⠁⠀⠀⠙⢿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠈⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠁⢠⣾⣶⣦⠀⢸⣿⣿⢠⣾⣿⣶⡀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⣿⣿⣿⠤⠘⠀⠘⠼⣿⣿⣿⡇⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⡀⢹⠟⠁⠀⠀⠀⠀⠀⠈⠙⢟⣁⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠖⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣦⡘⠢⠤⠤⠤⠤⠤⠒⠉⠁⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠟⠉⠢⣄⣢⠐⣄⠠⣄⢢⣼⠞⠉⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⡟⠀⠀⠀⠀⠉⠙⠚⠓⠊⠉⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⢀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⡰⠉⠈⠑⠠⢀⢸⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⡇⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⠿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠘⢿⣿⣿⡇⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀⠀ */}
//                     {/*     ⠀⠀⢰⠃⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠘⣿⣿⣿⣿⣿⡟⠁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡇⠀⠀⠀ */}
//                     {/*     ⠀⡠⠊⠀⢀⠐⡀⠈⠄⠂⡐⠀⢂⠐⠈⠠⢀⠀⠀⢻⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⢀⠛⡛⢫⠑⡄⢃⡐⢈⠐⡀⠄⠐⠀⠀⠀⠀⠈⢿⡇⠂⠀⠀ */}
//                     {/*     ⢠⢁⠀⠄⢂⡐⠠⡁⠌⡐⠠⢁⠂⠌⢠⢁⠂⡐⠀⠘⣿⣳⢤⡀⡀⢀⠀⡀⢀⠀⡀⠠⡀⠤⣁⢿⠀⠄⣂⠑⡂⠥⡘⢠⠐⢂⠰⠀⠌⡐⢈⠐⡀⠀⠀⠀⠑⢄⠀⠀ */}
//                     {/*     ⠈⢧⡘⡐⢂⠤⠑⡠⢁⠆⡁⠆⠌⣂⠁⡂⠌⡐⠀⠀⢹⣿⣷⣧⣝⣢⠱⡰⣈⢆⢡⢃⠴⡱⣌⣾⠈⡐⢠⠘⡠⢁⠆⡡⢘⠠⡁⠎⡐⡈⢄⠢⢀⠡⢀⠈⠂⠀⠑⡀ */}
//                     {/*     ⠀⠀⠙⢵⣊⠴⡁⢆⠡⢂⠅⡊⠔⡠⠘⢄⠒⡀⢁⠀⠀⢻⣿⣿⣿⣿⣿⣷⣷⣾⣶⣿⣾⣿⣿⣿⠀⠐⡄⠢⢁⠆⡘⢄⠡⢂⠱⢠⠑⡨⢄⠢⣁⠒⡄⢊⠄⣂⢀⡡ */}
//                     {/*     ⠀⠀⠀⠀⠉⠲⣍⢢⠱⡈⢆⠱⡈⠔⡉⢄⠒⠄⢂⠀⢀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠂⢄⠣⠌⣂⠱⡈⢆⠡⢊⠄⢣⠐⢢⠑⡄⢣⡘⢆⡳⣬⠞⠁ */}
//                     {/*     ⠀⠀⠀⢀⠀⠀⠈⢣⡞⡰⢈⠆⡱⢈⠔⡨⢘⡈⠆⢌⠀⡐⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠠⢉⠄⢢⠑⡄⢣⠘⡄⠣⢌⢊⡔⡉⢦⠩⡜⣡⢞⡷⠋⠁⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠙⢶⡉⢆⡱⢈⠆⡑⠢⢌⡘⢄⠣⡐⣡⠏⠉⠉⠉⠉⠉⠉⠉⠉⠍⠉⠉⢳⢁⠊⡜⢠⠃⡜⢠⠃⣌⠱⣈⠦⢰⡉⢆⡳⣼⠟⠁⠀⠀⡆⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠹⣖⡰⢃⡜⢄⠳⣠⠚⣌⠖⣥⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣎⠴⡈⢆⠱⡈⢆⠱⡠⢃⠖⣌⠣⣜⢣⠟⠁⠀⠀⠀⠀⠃⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢯⡼⣬⣓⣦⣟⣼⡿⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣶⣉⢆⠳⡌⡜⢢⠱⡩⢜⣤⢻⡼⠋⠀⠀⢸⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠉⠙⠛⠛⠋⠉⠀⡀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢾⣳⣼⣜⣧⣳⡽⣞⠞⠋⠀⠀⠀⠀⠒⠀⠀⠀⠀⠀⠀ */}
//                     {/*     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠈⠉⣉⢉⣉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
//                     {/* </div> */}
//
//                     {/* <img */}
//                     {/*     className="h-40 " */}
//                     {/*     src="https://avatars.githubusercontent.com/ThePIkachuDev" */}
//                     {/* ></img> */}
//                     {/* </div> */}
//                     {/* (｡˃ ᵕ ˂ )⸝♡⸜(｡˃ ᵕ ˂ )⸝♡⸜(｡˃ ᵕ ˂ ) */}
//                 </div>
//                 <div className="w-screen lg:w-1/2 px-4 h-fit relative lg:p-4 lg:pr-8  divide-y divide-gray-800 divide-solid">
//                     <h1 className="py-2 tracking-wider lg:py-6 lg:text-4xl">
//                         {"> "} Meharwan Singh{" "}
//                         <span className="text-gray-500">(@ThePikachuDev)</span>
//                     </h1>
//                     <h2 className="py-2 text-sm tracking-wider lg:py-6 lg:text-3xl text-gray-300">
//                         {" "}
//                         {"  "}
//                         <Tooltip tooltip="i code :)">
//                             Programmer
//                         </ Tooltip> ,
//                         {" "}
//                         <Tooltip tooltip="i use linux everyday, no windows">
//                             linux user
//                         </Tooltip> ,
//                         {" "}
//                         <Tooltip tooltip={`${Math.floor(hours).toLocaleString()} hrs`}>
//                             18yrs old
//                         </Tooltip> ,
//                         {" "}
//                         <Tooltip tooltip={`https://hackclub.com/`}>
//                             Hackclubber{" "}
//                         </Tooltip>
//                     </h2>
//
//                     <h3 className="py-2 text-xs lg:py-6 lg:text-3xl text-neutral-400 text-[15px] tracking-wider lg:tracking-wider">
//                         hi, I am a highschool computer science student living in India who
//                         loves to code and try new things in life. I especially love linux (
//                         and its eco system ) , studying maths and spending time in peace.{" "}
//                     </h3>
//
//                     <div className="contact_links text-sm flex gap-1 lg:gap-3.5">
//                         <Tooltip tooltip={`github.com/ThePikachuDev`}>
//                             <a
//                                 target="_blank" rel="noopener noreferrer"
//                                 href="https://github.com/ThePikachuDev"
//                                 className="underline underline-offset-8 tracking-widest lg:text-3xl flex items-center gap-2 border border-zinc-700 w-fit p-1 hover:text-zinc-400 "
//                             >
//
//                                 <AiFillGithub />
//                                 github
//                             </a>
//                         </Tooltip>
//
//                         <Tooltip tooltip={`@ThePikachuDev`}>
//                             <a
//                                 target="_blank" rel="noopener noreferrer"
//                                 href="https://discordapp.com/users/1237395043669639233"
//                                 className="underline underline-offset-8 lg:text-3xl flex items-center gap-1 border border-zinc-700 w-fit p-1 hover:text-zinc-400"
//                             >
//                                 <AiOutlineDiscord /> discord
//                             </a>
//                         </Tooltip>
//
//                         <Tooltip tooltip={`x.com/ThePikachuDev`}>
//                             <a
//
//                                 target="_blank" rel="noopener noreferrer"
//                                 href="https://x.com/ThePikachuDev"
//                                 className="underline underline-offset-8 lg:text-3xl flex items-center gap-1 border border-zinc-700 w-fit p-1 hover:text-zinc-400"
//                             >
//                                 <AiFillTwitterCircle /> X (twitter)
//                             </a>
//                         </Tooltip>
//
//                         {/* <Tooltip tooltip="This is some info"> */}
//                         {/*     <motion.div className="text-5xl "> */}
//                         {/*         tooltip text */}
//                         {/*     </motion.div> */}
//                         {/* </Tooltip> */}
//
//                         {/* <motion.div */}
//                         {/*     className="bg-green-300 text-5xl relative" */}
//                         {/*     onHoverStart={() => console.log('Hover starts')} */}
//                         {/*     onHoverEnd={() => console.log('Hover ends')} */}
//                         {/* > */}
//                         {/*     tooltip text */}
//                         {/**/}
//                         {/*     <div className="absolute -top-full w-full bg-red-200 text-center"> */}
//                         {/*         some info */}
//                         {/*     </div> */}
//                         {/* </motion.div> */}
//
//                     </div>
//
//                     {/* <div className="border h-30 flex "> */}
//                     {/*     <motion.div className="bar h-full w-10 bg-red-300 " */}
//                     {/*         animate={{ */}
//                     {/*             height: "100%" */}
//                     {/*         }} */}
//                     {/**/}
//                     {/*         transition={{ */}
//                     {/*             duration: 2, */}
//                     {/*             ease: "easeInOut", */}
//                     {/**/}
//                     {/*         }} */}
//                     {/**/}
//                     {/*         initial={{ */}
//                     {/*             height: 0 */}
//                     {/*         }} */}
//                     {/*     ></motion.div> */}
//                     {/*     <div className="bar h-full w-10 bg-green-300 "></div> */}
//                     {/*     <div className="bar h-full w-10 bg-red-300 "></div> */}
//                     {/*     <div className="bar h-full w-10 bg-zinc-300 "></div> */}
//                     {/*     <div className="bar h-full w-10 bg-gray-700 "></div> */}
//                     {/*     <div className="bar h-full w-10 bg-red-900 "></div> */}
//                     {/*     <div className="bar h-full w-10 bg-red-400 "></div> */}
//                     {/* </div> */}
//                 </div>
//             </div>
//         </main>
//     );
// };
//
// export default HomePage;
