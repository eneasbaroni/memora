import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ISnackbar {
    open: boolean;
    message: string;
    type: "success" | "error";
}

interface IProps {
    snackbar: ISnackbar;
    onClose: () => void;
}

const Snackbar = ({ snackbar, onClose }: IProps) => {
    useEffect(() => {
        if (snackbar.open) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [snackbar.open, onClose]);

    return (
        <AnimatePresence>
            {snackbar.open && (
                <motion.div
                    className={`fixed bottom-4 left-4 px-4 py-3 rounded-md text-white shadow-lg ${
                        snackbar.type === "success"
                            ? "bg-green-500"
                            : "bg-red-500"
                    }`}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {snackbar.message}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Snackbar;
