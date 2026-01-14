import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Info from "./info";

interface IProps {
    handleList: () => void;
}

interface IMemora {
    ci: string;
    nombre: string;
    apellido: string;
    email: string;
    codigo?: string;
    link: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const MemoraList = ({ handleList }: IProps) => {
    const [info, setInfo] = useState<IMemora[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(`${baseUrl}/api/memora`);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data: IMemora[] = await response.json();
                setInfo(data);
            } catch (err) {
                console.error("Error al obtener memoras:", err);
                setError("Error al cargar la información. Intenta nuevamente.");
                setInfo([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="absolute top-0 left-0 h-dvh w-screen pt-12 mobile:pt-[7rem] z-50 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden ">
            <motion.div
                className="w-[80%] mobile:w-[90%] h-[80dvh] mobile:h-[75dvh] rounded bg-white flex items-start justify-start shadow-md relative p-4 pt-10"
                initial={{ y: "100dvh" }}
                animate={{ y: "0" }}
                exit={{ y: "100dvh" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <button className="absolute top-4 right-4" onClick={handleList}>
                    X
                </button>
                {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-lg">Cargando información...</p>
                    </div>
                ) : error ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-lg text-red-600">{error}</p>
                    </div>
                ) : (
                    <Info info={info} />
                )}
            </motion.div>
        </div>
    );
};

export default MemoraList;
