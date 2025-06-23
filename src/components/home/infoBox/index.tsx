/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Header from "@/components/shared/header";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.7,
            staggerChildren: 0.3,
            delayChildren: 1.3,
        },
    },
};

const childrenVariants = {
    hidden: { y: "100dvh", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

const InfoBox = () => {
    const container = useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    const backgroundPosition = useTransform(
        scrollYProgress,
        [0, 1],
        ["0% 0%", "0% 100%"]
    );

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <motion.div
            className="w-full h-auto pb-16 flex flex-col gap-4 items-center justify-center relative bg-[url('/Images/clouds.png')] bg-cover bg-center bg-no-repeat"
            ref={container}
            style={{
                backgroundPosition: backgroundPosition,
            }}
        >
            <Header />
            <motion.div
                className="w-full h-auto flex flex-col gap-4 items-center justify-center "
                variants={variants as any}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl tablet:text-3xl mobile:text-2xl font-safira text-center"
                    variants={childrenVariants as any}
                >
                    MÉMORA <br />
                    hacemos del amor<span className="font-raleway">; </span>
                    memorias.
                </motion.h1>
                <motion.h2
                    className="text-lg tablet:text-base mobile:text-sm font-raleway text-center"
                    variants={childrenVariants as any}
                >
                    Porque hay recuerdos que merecen hacerse eternos.
                </motion.h2>
                <motion.img
                    src="/Images/qr-code.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-[300px] tablet:w-[200px] mobile:w-[150px] h-[300px] tablet:h-[200px] mobile:h-[150px] z-10 rounded-md"
                    variants={childrenVariants as any}
                />
                <motion.div
                    className="w-3xl tablet:w-[90%] px-26 mobile:px-8 py-8 mobile:py-26 border border-black/5 bg-white/40 backdrop-blur-xs rounded-full flex flex-col items-center justify-center"
                    variants={childrenVariants as any}
                >
                    <h3 className="text-2xl tablet:text-xl font-safira text-center">
                        ¿Qué es Mémora?
                    </h3>
                    <p className="text-center tablet:text-sm">
                        <span className="font-bold">Mémora </span> es un
                        proyecto que nace del recorrido profundo y amoroso de
                        quien lo impulsa, Cecilia Torres desde hace años se
                        dedica a acompañar a personas en duelo, escribir sobre
                        la experiencia del duelo y coordinar talleres
                        vivenciales. También inició, en conjunto con otras
                        personas, una fundación para transformar el modo en que
                        nuestra sociedad trata el duelo y a quienes lo
                        atraviesan.
                        <br />
                        Desde esa experiencia, y con la convicción de que{" "}
                        <span className="font-bold">
                            el recuerdo, también puede ser
                        </span>{" "}
                        un recuerdo lindo, nace esta propuesta sensible y
                        novedosa.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default InfoBox;
