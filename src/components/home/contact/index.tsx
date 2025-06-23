"use client";
import { motion } from "framer-motion";

interface Props {
    closeModal: () => void;
}

const ContactForm = ({ closeModal }: Props) => {
    return (
        <div className="fixed top-0 w-full h-[100vh] bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center">
            <motion.div
                className="w-2xl bg-bgColor rounded-lg p-4 relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <button onClick={closeModal} className="absolute top-4 right-4">
                    X
                </button>
                <form
                    action=""
                    className="mt-4 w-full flex flex-col items-center justify-center"
                >
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="text-center border-b border-black/20"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="text-center border-b border-black/20"
                    />
                    <textarea
                        placeholder="Mensaje"
                        className=" h-12 text-center border-b border-black/20 flex align-bottom"
                        rows={4}
                        style={{ verticalAlign: "bottom" }}
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-mainColor hover:bg-mainColor/80 transition-all duration-300 text-white px-4 py-2 rounded-full cursor-pointer"
                    >
                        Enviar
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
