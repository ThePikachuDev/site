import { animate, hover } from "motion";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";

const Navbar = () => {
  const ref = useRef(null);
  useEffect(() => {
    return hover(".navTextLink", (element) => {
      //   animate(".navTextContainer", { gap: 4 });
      //   animate(".navTextLeftBracket", { scale: 1.3, x: -10 });

      const exitTransition = {
        scale: 1,
        color: "white",
        x: 1,
      };

      animate(element.querySelector(".navTextLeftBracket"), {
        scale: 1.3,
        x: -6,
      });
      animate(element.querySelector(".navTextRightBracket"), {
        scale: 1.3,
        x: 6,
      });
      animate(element.querySelector(".navText"), {
        color: "rgba(220, 220, 220, 1)",
      });

      return () => {
        animate(
          element.querySelector(
            ".navTextLeftBracket,.navTextRightBracket,.navText"
          ),
          exitTransition
        );

        animate(
          element.querySelector(
            ".navTextRightBracket"
          ),
          exitTransition
        );
        animate(
          element.querySelector(
            ".navText"
          ),
          exitTransition
        );
      };
    });

    // return hover(".navTextLink", () => {
    //   animate(".navTextContainer", { gap: 4 });
    //   animate(".navTextLeftBracket", { scale: 1.3, x: -10 });
    //   animate(".navTextRightBracket", { scale: 1.3, x: 10 });
    //   animate(".navText", { color: "rgba(220, 220, 220, 1)" });

    //   return () =>
    //     animate(".navTextLeftBracket,.navTextRightBracket,.navText", {
    //       scale: 1,
    //       color: "white",
    //       x: 1,
    //     });
    // });
  });

  return (
    <nav className="w-screen h-fit py-11 px-12 flex gap-7">
      <motion.a
        href="/blog"
        // ref={ref}
        className="flex navTextLink items-center justify-between w-fit text-3xl cursor-pointer"
      >
        <motion.div
          animate={{ scale: 1 }}
          className="navTextContainer flex items-center gap-3"
        >
          <motion.div className="block navTextLeftBracket w-fit">[</motion.div>
          <motion.div className="block navText w-fit">Home</motion.div>
          <motion.div className="block navTextRightBracket  w-fit">
            ]
          </motion.div>
        </motion.div>
      </motion.a>

      <motion.a
        href="/blog"
        // ref={ref}
        className="navTextLink flex items-center justify-between w-fit text-3xl cursor-pointer"
      >
        <motion.div
          animate={{ scale: 1 }}
          className="navTextContainer flex items-center gap-1"
        >
          <motion.div className="block navTextLeftBracket w-fit">[</motion.div>
          <motion.div className="block navText w-fit">Projects</motion.div>
          <motion.div className="block navTextRightBracket  w-fit">
            ]
          </motion.div>
        </motion.div>
      </motion.a>
      
      
      <motion.a
        href="/blog"
        // ref={ref}
        className="navTextLink flex items-center justify-between w-fit text-3xl cursor-pointer"
      >
        <motion.div
          animate={{ scale: 1 }}
          className="navTextContainer flex items-center gap-1"
        >
          <motion.div className="block navTextLeftBracket w-fit">[</motion.div>
          <motion.div className="block navText w-fit">Blogs</motion.div>
          <motion.div className="block navTextRightBracket  w-fit">
            ]
          </motion.div>
        </motion.div>
      </motion.a>
      <motion.a
        href="/blog"
        // ref={ref}
        className="navTextLink flex items-center justify-between w-fit text-3xl cursor-pointer"
      >
        <motion.div
          animate={{ scale: 1 }}
          className="navTextContainer flex items-center gap-1"
        >
          <motion.div className="block navTextLeftBracket w-fit">[</motion.div>
          <motion.div className="block navText w-fit">About Me</motion.div>
          <motion.div className="block navTextRightBracket  w-fit">
            ]
          </motion.div>
        </motion.div>
      </motion.a>
    </nav>
  );
};

export default Navbar;
