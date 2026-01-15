import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IProps) => {
    return (
        <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
                isOpen ? "block" : "hidden"
            } backdrop-blur-sm`}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
