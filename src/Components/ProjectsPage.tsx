import Tooltip from "./Tooltip";

const ProjectsPage = () => {
    const projects = [
        { name: "gh-dlp", desc: " A cli tool to download a subfolder of a github repo", link: "https://github.com/ThePikachuDev/gh-dlp", tooltip: "18+ stars, 200+ git clones" },
        { name: "chessz", desc: "it is a chess game made using zig and raylib. (WIP) ", link: "https://github.com/ThePikachuDev/chessz", tooltip: "work in progress" },
        { name: "discord quiz bot", desc: " An organized Discord bot Code using disocrd.js Library", link: "https://github.com/ThePikachuDev/Discord-bot", tooltip: "quiz bot" },
        { name: "dotfiles", desc: "my waybar, i3wm and other linux dotfiles", link: "https://github.com/ThePikachuDev/dotfiles", tooltip: "hyprland ,i3wm ,bash ,zsh , etc" },
        { name: "radiovibe.nvim", desc: "A Cozy, Vibe-Focused Music plugin with an animated ascii character for Neovim ", link: "https://github.com/ThePikachuDev/radioVibe.nvim", tooltip: "neovim btw" },
        { name: "significo site clone", desc: "frontend site made using GSAP and locomotive ", link: "https://github.com/ThePikachuDev/Significo-Site-Clone", tooltip: "animations are cool" },
        { name: "sundown studio site clone", desc: "modern frontend site made using html, css and js", link: "https://github.com/ThePikachuDev/sundown-Studios", tooltip: "aesthetic : )" },
        { name: "chess project", desc: "chess game made using MERN stack and socket.io", link: "https://github.com/ThePikachuDev/Chess-Project", tooltip: "chess : )" },
    ]

    return (
        <main className="min-h-[80vh] w-screen bg-black text-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-[80%]  mx-auto">
                <div className="border-white mb-8 sm:mb-12">
                    <div className="border-white m-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] sm:tracking-[0.5em] uppercase p-4 sm:p-6 text-center">
                            [PROJECTS]
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-6 gap-6 md:gap-8">
                    {projects.map((repo, index: number) => {
                        return (
                            <Tooltip tooltip={repo.tooltip}>
                                <a
                                    key={index}
                                    target="_blank" rel="noopener noreferrer"
                                    href={repo.link}
                                    className="block border border-white w-fit bg-black transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="border-white m-1 p-4 sm:p-4">
                                        <h1 className="text-4xl">
                                            {">"} {repo.name}
                                        </h1>
                                        <p className="text-3xl text-stone-400">{repo.desc}</p>
                                    </div>
                                </a>
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage
