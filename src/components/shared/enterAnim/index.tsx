"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EnterAnim = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    const [curve, setCurve] = useState(1);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        if (window.innerWidth < window.innerHeight) {
            setCurve(1.15);
        } else {
            setCurve(1);
        }
    }, []);

    const init = `M 0 0 L ${screenWidth} 0 L ${screenWidth} ${
        screenHeight * 1.3
    } C ${screenWidth * 0.7} ${screenHeight * curve} ${screenWidth * 0.3} ${
        screenHeight * curve
    } 0 ${screenHeight * 1.3} L 0 0`;

    const anim = `M 0 0 L ${screenWidth} 0 L ${screenWidth} ${
        screenHeight * 1.3
    } C ${screenWidth * 0.7} ${screenHeight * 1.3} ${screenWidth * 0.3} ${
        screenHeight * 1.3
    } 0 ${screenHeight * 1.3} L 0 0`;
    return (
        <>
            <motion.div
                className="w-full h-[100dvh] bg-secondaryColor fixed top-0 left-0 z-50"
                initial={{ display: "block" }}
                animate={{ display: "none" }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                }}
            ></motion.div>
            {screenWidth > 0 && screenHeight > 0 && (
                <motion.svg
                    className="w-full h-[130dvh] p-0 m-0 fixed top-0 left-0 z-50"
                    viewBox={`0 0 ${screenWidth} ${screenHeight * 1.3}`}
                    initial={{ y: "0vh" }}
                    animate={{ y: "-130vh" }}
                    transition={{
                        duration: 2,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.5,
                    }}
                >
                    <motion.path
                        className="w-full h-full "
                        fill="#9ba192"
                        d={init}
                        initial={{
                            d: init,
                        }}
                        animate={{
                            d: anim,
                        }}
                        transition={{
                            duration: 2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.5,
                        }}
                    />
                </motion.svg>
            )}
        </>
    );
};
export default EnterAnim;
