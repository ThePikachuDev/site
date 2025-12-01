import { AiOutlineJavaScript, AiOutlineLinux } from 'react-icons/ai';
import { FaPython, FaReact } from 'react-icons/fa';
import { FaGolang, FaNodeJs } from 'react-icons/fa6';
import { RiCss3Line, RiHtml5Line } from 'react-icons/ri';
import { SiArchlinux, SiAstro, SiGnubash, SiGodotengine, SiLua, SiNeovim, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const SkillsPage = () => {
    const skills = [
        { icon: AiOutlineJavaScript, name: 'Javascript' },
        { icon: AiOutlineLinux, name: 'Linux' },
        { icon: FaReact, name: 'React JS' },
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiNeovim, name: 'Neovim' },
        { icon: SiLua, name: 'Lua' },
        { icon: RiHtml5Line, name: 'HTML' },
        { icon: RiCss3Line, name: 'CSS' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: FaGolang, name: 'Golang' },
        { icon: SiGodotengine, name: 'Godot' },
        { icon: FaPython, name: 'Python' },
        { icon: SiTypescript, name: 'Typescript' },
        { icon: SiArchlinux, name: 'Arch Linux' },
        { icon: SiAstro, name: 'Astro JS' },
        { icon: SiGnubash, name: 'Bash' },
        { icon: FaNodeJs, name: 'Node JS' },
    ];

    return (
        <main className="min-h-screen w-full bg-black text-white px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="border-white m-0.5 sm:m-1">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] lg:tracking-[0.5em] uppercase py-3 px-2 sm:py-4 sm:px-4 md:py-5 md:px-6 lg:py-6 lg:px-8 text-center">
                            [SKILLS]
                        </h1>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="border border-white bg-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
                            >
                                <div className="border-white m-0.5 sm:m-1 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                                        {/* Icon */}
                                        <Icon className="shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl" />

                                        {/* Skill Name */}
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase truncate">
                                                {skill.name}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default SkillsPage;

// import { AiOutlineJavaScript, AiOutlineLinux } from 'react-icons/ai';
// import { FaPython, FaReact } from 'react-icons/fa';
// import { FaGolang, FaNodeJs } from 'react-icons/fa6';
// import { RiCss3Line, RiHtml5Line } from 'react-icons/ri';
// import { SiArchlinux, SiAstro, SiGnubash, SiGodotengine, SiLua, SiNeovim, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
//
// const SkillsPage = () => {
//     const skills = [
//         { icon: AiOutlineJavaScript, name: 'Javascript' },
//         { icon: AiOutlineLinux, name: 'Linux' },
//         { icon: FaReact, name: 'React JS' },
//         { icon: SiNextdotjs, name: 'Linux' },
//         { icon: SiNeovim, name: 'Neovim' },
//         { icon: SiLua, name: 'Lua' },
//         { icon: RiHtml5Line, name: 'HTML' },
//         { icon: RiCss3Line, name: 'CSS' },
//         { icon: SiTailwindcss, name: 'Tailwind CSS' },
//         { icon: FaGolang, name: 'Golang' },
//         { icon: SiGodotengine, name: 'Godot' },
//         { icon: FaPython, name: 'Python' },
//         { icon: SiTypescript, name: 'Typescript' },
//         { icon: SiArchlinux, name: 'Arch Linux' },
//         { icon: SiAstro, name: 'Astro JS' },
//         { icon: SiGnubash, name: 'Bash' },
//         { icon: FaNodeJs, name: 'Node JS' },
//     ];
//
//     return (
//         <main className="min-h-fit w-full bg-black text-white p-4 sm:p-6 lg:p-8">
//             <div className="lg:max-w-[80%]  mx-auto">
//                 <div className="border-white mb-8 sm:mb-12">
//                     <div className="border-white m-1">
//                         <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
//                             [SKILLS]
//                         </h1>
//                     </div>
//                 </div>
//
//
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-0">
//                     {skills.map((skill, index) => {
//                         const Icon = skill.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className="border-white bg-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
//                             >
//                                 <div className="border-2 border-white m-1 p-1 sm:p-4">
//                                     <div className="flex items-center gap-1 sm:gap-4">
//                                         <Icon className="text-md  sm:text-4xl md:text-7xl" />
//                                         <div className="text-center">
//                                             {/* <span className="text-white group-hover:text-black text-xs sm:text-sm">{'>'}</span> */}
//                                             <h2 className="inline-block text-xs sm:text-md md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl tracking-[0.2em] sm:tracking-[0.3em] uppercase ml-2">
//                                                 {skill.name}
//                                             </h2>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//
//                 {/* // <div className="mt-8 sm:mt-12 border-t-2 border-white pt-4 sm:pt-6 text-center"> */}
//                 {/* //     <p className="text-xs sm:text-md lg:text-2xl tracking-widest opacity-70"> */}
//                 {/* //         [SYSTEM READY] © {new Date().getFullYear()} */}
//                 {/* //     </p> */}
//                 {/* // </div> */}
//             </div>
//
//             {/* Retro scanline overlay effect */}
//             {/* <div */}
//             {/*     className="pointer-events-none fixed inset-0 z-50" */}
//             {/*     style={{ */}
//             {/*         background: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(255, 255, 255, 0.03) 3px)', */}
//             {/*     }} */}
//             {/* ></div> */}
//         </main>
//     );
// };
//
// export default SkillsPage;
//
// // import { AiOutlineJavaScript } from "react-icons/ai"
// // import { AiOutlineLinux } from 'react-icons/ai'
// //
// //
// // const SkillsPage = () => {
// //     return (
// //         <main className="w-screen flex justify-center ">
// //             <div className="w-[80%] ">
// //                 <h1 className="text-5xl tracking-widest">
// //                     skills
// //                 </h1>
// //
// //                 <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] auto-rows-fr pb-4">
// //
// //                     <div className="flex items-center justify-center gap-4 w-70 p-2 text-4xl border bg-neutral-800">
// //                         <AiOutlineJavaScript className=""></AiOutlineJavaScript>
// //                         <h1 className=" tracking-widest">
// //                             Javascript
// //                         </h1>
// //                     </div>
// //
// //                     <div className="flex items-center justify-center gap-4 w-fit p-2 text-4xl border bg-neutral-800">
// //                         <AiOutlineLinux className=""></AiOutlineLinux>
// //                         <h1 className=" tracking-widest">
// //                             Linux
// //                         </h1>
// //                     </div>
// //
// //                 </div>
// //
// //             </div>
// //         </main>
// //     )
// // }
// //
// // export default SkillsPage
