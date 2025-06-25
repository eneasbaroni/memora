"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import MemoraList from "@/components/admin/memoraList";

import MemoraForm from "@/components/admin/memoraForm";

const Admin = () => {
    // const { data: session, status } = useSession();
    const [memoraList, setMemoraList] = useState(false);

    const handleList = () => {
        setMemoraList(!memoraList);
    };

    return (
        <div className="min-h-[100dvh] w-full flex flex-col justify-center items-center bg-bgColor text-black">
            <AnimatePresence>
                {memoraList && (
                    <MemoraList
                        key="memoraList"
                        handleList={handleList}
                    ></MemoraList>
                )}
            </AnimatePresence>
            <h1 className="m-0 text-center text-4xl mobile:text-2xl font-moneta">
                Panel Administrador
            </h1>
            {/* {status === "loading" && <Loader />} */}

            <div className="flex flex-col min-h-[calc(100vh-11rem)] pb-4 items-center justify-start relative">
                <div className="flex flex-col items-center justify-center"></div>
                <div>
                    <MemoraForm />
                    <button
                        className="flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md py-2 px-4 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                        onClick={handleList}
                    >
                        Ver Memoras
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Admin;
