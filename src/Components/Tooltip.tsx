import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

interface TooltipProps {
    children: React.ReactNode;     // what you hover on
    tooltip: React.ReactNode;      // tooltip text/content
}

export default function Tooltip({ children, tooltip }: TooltipProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <motion.div
            className="relative inline-block"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
        >
            {children}

            {isHover && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -5 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap 
                     bg-zinc-800 text-white text-3xl tracking-wider px-3 py-1 shadow-lg"
                >
                    {tooltip}
                </motion.div>
            )}
        </motion.div>
    );
}

