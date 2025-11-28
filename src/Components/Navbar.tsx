import { animate, hover } from "motion";
import { motion } from "motion/react";
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        return hover(".navTextLink", (element) => {
            const exitTransition = {
                scale: 1,
                color: "rgb(255, 255, 255)",
                x: 1,
            };

            animate(element.querySelector(".navTextLeftBracket"), {
                scale: 1.4,
                x: -7,
                color: "rgba(220, 220, 220, .71)",
            });
            animate(element.querySelector(".navTextRightBracket"), {
                scale: 1.4,
                x: 7,
                color: "rgba(220, 220, 220, .71)",
            });
            animate(element.querySelector(".navText"), {
                color: "rgba(220, 220, 220, .71)",
            });

            return () => {
                animate(
                    element.querySelector(
                        ".navTextLeftBracket,.navTextRightBracket,.navText",
                    ),
                    exitTransition,
                );

                animate(element.querySelector(".navTextRightBracket"), exitTransition);
                animate(element.querySelector(".navText"), exitTransition);
            };
        });
    });

    return (
        <span className="sm:w-screen sm:flex sm:items-center sm:justify-center">
            <nav className="w-screen sm:w-fit py-4 px-3 sm:p-5 xl:p-10 flex flex-wrap items-center gap-4 sm:gap-7 xl:gap-20">
                {["Home", "Blogs", "Projects", "About"].map((item) => (
                    <motion.a
                        key={item}
                        href={"/" + item.toLowerCase()}
                        className="flex navTextLink items-center justify-between w-fit text-md md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl cursor-pointer"
                    >
                        <motion.div className="navTextContainer flex items-center gap-2 sm:gap-3 xl:gap-5">
                            <motion.div className="navTextLeftBracket w-fit">[</motion.div>
                            <motion.div className="navText">{item}</motion.div>
                            <motion.div className="navTextRightBracket  w-fit">]</motion.div>
                        </motion.div>
                    </motion.a>
                ))}
            </nav>
        </span>
    );
};

export default Navbar;
