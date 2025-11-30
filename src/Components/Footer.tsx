const Footer = () => {
    return (
        <div className="w-screen h-fit bg-black">
            <div className="lg:max-w-[80%] mx-auto">
                <footer className="flex justify-between p-2 py-8">
                    <ul className="flex items-center gap-4 text-sm md:text-md xl:text-lg 2xl:text-2xl underline-offset-4 underline">

                        <li>

                            <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://github.com/ThePikachuDev"
                            >
                                Github
                            </a>


                        </li>

                        <li>


                            <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://discordapp.com/users/1237395043669639233"
                            >
                                Discord
                            </a>

                        </li>

                        <li>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                href="https://x.com/ThePikachuDev"
                            >
                                X (twitter)
                            </a>
                        </li>
                    </ul>


                    <h1 className="text-sm md:text-md xl:text-lg 2xl:text-2xl ">Made By {" "}

                        <a className="underline underline-offset-4 " href="https://github.com/ThePikachuDev">Meharwan</a>

                    </h1>

                </footer>
            </div>
        </div>
    )
}

export default Footer
