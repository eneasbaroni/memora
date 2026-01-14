import { useState } from "react";

interface IMemora {
    ci: string;
    nombre: string;
    apellido: string;
    email: string;
    codigo?: string;
    link: string;
}

interface IProps {
    info: IMemora[];
}

const Info = ({ info }: IProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredInfo = info.filter((item) => {
        const term = searchTerm.toLowerCase();
        return (
            item.ci.toLowerCase().includes(term) ||
            item.nombre.toLowerCase().includes(term) ||
            item.apellido.toLowerCase().includes(term) ||
            item.email.toLowerCase().includes(term)
        );
    });

    return (
        <div className="w-full h-full flex flex-col items-center justify-start gap-2 pt-2">
            <input
                type="text"
                placeholder="Buscar por CI, nombre, apellido o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mainColor/50 mobile:text-sm"
            />

            {filteredInfo.length === 0 && (
                <div className="w-full border p-2 rounded-md mt-2">
                    <h3 className="m-0 p-0 text-center mobile:text-xl">
                        {info.length === 0
                            ? "No hay informacion"
                            : "No se encontraron resultados"}
                    </h3>
                </div>
            )}

            <div className="w-full overflow-y-auto flex flex-col items-center justify-start gap-2">
                {filteredInfo.map((item) => (
                    <div
                        key={item.ci}
                        className="w-full shadow bg-mainColor/20  p-2 rounded-md mobile:[&>p]:text-sm"
                    >
                        <h3 className="m-0 p-0 font-bold">{item.ci}</h3>
                        <p>Nombre: {item.nombre}</p>
                        <p>Apellido: {item.apellido}</p>
                        <p>Email: {item.email}</p>
                        <p>Codigo: {item.codigo}</p>
                        <p className="break-all">Link: {item.link}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Info;
