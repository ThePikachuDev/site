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
        { icon: SiNextdotjs, name: 'Linux' },
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
        <main className="min-h-[80vh] w-full bg-black text-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="border-white mb-8 sm:mb-12">
                    <div className="border-white m-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
                            [SKILLS]
                        </h1>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="border-white bg-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
                            >
                                <div className="border-2 border-white m-1 p-4 sm:p-4">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Icon className="text-5xl sm:text-6xl md:text-7xl" />
                                        <div className="text-center">
                                            {/* <span className="text-white group-hover:text-black text-xs sm:text-sm">{'>'}</span> */}
                                            <h2 className="inline-block text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.3em] uppercase ml-2">
                                                {skill.name}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* // <div className="mt-8 sm:mt-12 border-t-2 border-white pt-4 sm:pt-6 text-center"> */}
                {/* //     <p className="text-xs sm:text-md lg:text-2xl tracking-widest opacity-70"> */}
                {/* //         [SYSTEM READY] © {new Date().getFullYear()} */}
                {/* //     </p> */}
                {/* // </div> */}
            </div>

            {/* Retro scanline overlay effect */}
            {/* <div */}
            {/*     className="pointer-events-none fixed inset-0 z-50" */}
            {/*     style={{ */}
            {/*         background: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(255, 255, 255, 0.03) 3px)', */}
            {/*     }} */}
            {/* ></div> */}
        </main>
    );
};

export default SkillsPage;

// import { AiOutlineJavaScript } from "react-icons/ai"
// import { AiOutlineLinux } from 'react-icons/ai'
//
//
// const SkillsPage = () => {
//     return (
//         <main className="w-screen flex justify-center ">
//             <div className="w-[80%] ">
//                 <h1 className="text-5xl tracking-widest">
//                     skills
//                 </h1>
//
//                 <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] auto-rows-fr pb-4">
//
//                     <div className="flex items-center justify-center gap-4 w-70 p-2 text-4xl border bg-neutral-800">
//                         <AiOutlineJavaScript className=""></AiOutlineJavaScript>
//                         <h1 className=" tracking-widest">
//                             Javascript
//                         </h1>
//                     </div>
//
//                     <div className="flex items-center justify-center gap-4 w-fit p-2 text-4xl border bg-neutral-800">
//                         <AiOutlineLinux className=""></AiOutlineLinux>
//                         <h1 className=" tracking-widest">
//                             Linux
//                         </h1>
//                     </div>
//
//                 </div>
//
//             </div>
//         </main>
//     )
// }
//
// export default SkillsPage
