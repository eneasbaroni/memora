import { useState, useCallback } from "react";
import Modal from "@/components/shared/modal";
import EditMemoraForm from "@/components/admin/memoraForm/editForm";
import Snackbar, { ISnackbar } from "@/components/shared/snackbar";

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
    onRefresh: () => void;
}

const Info = ({ info, onRefresh }: IProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMemora, setSelectedMemora] = useState<IMemora | null>(null);
    const [snackbar, setSnackbar] = useState<ISnackbar>({
        open: false,
        message: "",
        type: "success",
    });

    const handleEditClick = (memora: IMemora) => {
        setSelectedMemora(memora);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMemora(null);
    };

    const handleSnackbarClose = useCallback(() => {
        setSnackbar({ ...snackbar, open: false });
    }, [snackbar]);

    const handleSuccess = (message: string) => {
        setSnackbar({
            open: true,
            message,
            type: "success",
        });
    };

    const handleError = (message: string) => {
        setSnackbar({
            open: true,
            message,
            type: "error",
        });
    };

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
        <>
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
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="m-0 p-0 font-bold">{item.ci}</h3>
                                <button
                                    onClick={() => handleEditClick(item)}
                                    className="px-3 py-1 bg-mainColor/50 hover:bg-mainColor/70 text-white rounded text-sm transition-all duration-300"
                                >
                                    Editar
                                </button>
                            </div>
                            <p>Nombre: {item.nombre}</p>
                            <p>Apellido: {item.apellido}</p>
                            <p>Email: {item.email}</p>
                            <p>Codigo: {item.codigo}</p>
                            <p className="break-all">Link: {item.link}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedMemora && (
                    <EditMemoraForm
                        memora={selectedMemora}
                        onSuccess={handleSuccess}
                        onError={handleError}
                        onClose={handleCloseModal}
                        onRefresh={onRefresh}
                    />
                )}
            </Modal>

            <Snackbar snackbar={snackbar} onClose={handleSnackbarClose} />
        </>
    );
};

export default Info;
