import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 h-[100dvh]  w-full flex items-center justify-center bg-white/20 z-50 backdrop-blur-xs">
            <motion.div
                className="w-12 h-12 border-4 border-t-mainColor border-secondaryColor rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default Loader;
