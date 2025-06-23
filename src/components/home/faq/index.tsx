"use client";
import { motion } from "framer-motion";

import { useState } from "react";
const faqData = [
    {
        id: 1,
        question: "¿Qué se puede incluir en un homenaje?",
        answer: "Podés incluir lo que mejor represente a tu ser querido: videos, audios, cartas, poemas, galerías de fotos, frases significativas. Es un espacio personalizado, creado con amor, para preservar su memoria de forma única.",
        isOpen: false,
    },
    {
        id: 2,
        question: "¿Se puede modificar con el tiempo?",
        answer: "Sí. El homenaje es editable. Si más adelante querés agregar o cambiar contenido, podés hacerlo. A veces el recuerdo se enriquece con el tiempo, y Mémora está pensada para acompañar ese proceso. (Las actualizaciones tienen un costo adicional.)",
        isOpen: false,
    },
    {
        id: 3,
        question: "¿Qué pasa si cambio de cementerio o urna?",
        answer: "El código QR puede retirarse e instalarse nuevamente en otro espacio memorial. También podemos generarte uno nuevo si lo necesitás. nuevamente, con los costos correspondientes.",
        isOpen: false,
    },
    {
        id: 4,
        question: "¿Qué dispositivos pueden leer el código QR?",
        answer: "Cualquier teléfono celular con cámara y conexión a internet puede escanear el código QR y acceder al homenaje. No hace falta descargar ninguna aplicación especial.",
        isOpen: false,
    },
    {
        id: 5,
        question: "¿Cómo se protege la privacidad?",
        answer: "Cada homenaje puede ser público o privado, según tu elección. Si preferís que lo vean solo algunas personas, podemos protegerlo con contraseña. Solo quienes reciban el enlace y la clave podrán acceder. Cuidamos cada recuerdo con el mismo respeto con el que fue creado.",
        isOpen: false,
    },
];

const FaqSection = () => {
    const [faq, setFaq] = useState(faqData);
    const handleChange = (id: number) => {
        setFaq(
            faq.map((item) => ({
                ...item,
                isOpen: item.id === id ? !item.isOpen : false,
            }))
        );
    };
    return (
        <div className="w-full py-16 bg-bgColor flex flex-col gap-4 items-center justify-center">
            <h2 className="text-3xl tablet:text-2xl mobile:text-xl font-safira">
                Preguntas frecuentes
            </h2>
            <div className="w-full flex flex-col gap-4 items-center justify-center border-t border-black/20 pt-4">
                {faq.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleChange(item.id)}
                        className="w-full flex flex-col gap-4 items-end justify-center border-b border-black/20 pb-4"
                    >
                        <div className="w-full flex gap-4 items-end justify-between">
                            <button className="w-10 h-10   flex items-center justify-center">
                                <span className="text-2xl tablet:text-xl">
                                    {item.isOpen ? "-" : "+"}
                                </span>
                            </button>

                            <h3 className="w-full pr-4 text-2xl tablet:text-xl tablet:leading-[1.2rem] font-safira text-right">
                                {item.question}
                            </h3>
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: item.isOpen ? "auto" : 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden pr-4 w-1/2 tablet:w-full"
                        >
                            <p className="text-left tablet:text-sm mobile:text-xs">
                                {item.answer}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FaqSection;
