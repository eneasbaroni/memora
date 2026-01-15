import { useFormStatus } from "react-dom";
import { handleUpdateMemora } from "./updateActions";
import { useActionState, useEffect } from "react";
import { useRef } from "react";
import Loader from "@/components/shared/loader";

interface IMemora {
    ci: string;
    nombre: string;
    apellido: string;
    email: string;
    codigo?: string;
    link: string;
}

interface IProps {
    memora: IMemora;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
    onClose: () => void;
    onRefresh: () => void;
}

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <>
            {pending && <Loader />}
            <button
                type="submit"
                className="bg-mainColor hover:bg-mainColor/80 text-white rounded-full px-6 py-2 transition-all duration-300 font-semibold shadow-md hover:shadow-lg disabled:opacity-50"
                disabled={pending}
            >
                {pending ? "..." : "Actualizar"}
            </button>
        </>
    );
};

const EditMemoraForm = ({ memora, onSuccess, onError, onClose, onRefresh }: IProps) => {
    const ref = useRef<HTMLFormElement>(null);
    const [state, action] = useActionState(handleUpdateMemora, null);
    const error = state?.error;
    const success = state?.success;

    useEffect(() => {
        if (success) {
            onSuccess(success);
            onRefresh();
            onClose();
        }
    }, [success, onSuccess, onClose, onRefresh]);

    useEffect(() => {
        if (error) {
            onError(error);
        }
    }, [error, onError]);

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-mainColor">
                Editar Memora
            </h2>
            <form
                className="flex flex-col gap-6 w-full"
                action={action}
                ref={ref}
            >
                <input type="hidden" name="originalCi" value={memora.ci} />

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            CI
                        </label>
                        <input
                            type="text"
                            id="ci"
                            name="ci"
                            placeholder="ci"
                            defaultValue={memora.ci}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            defaultValue={memora.nombre}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            Apellido
                        </label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
                            defaultValue={memora.apellido}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            defaultValue={memora.email}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            Código
                        </label>
                        <input
                            type="text"
                            id="codigo"
                            name="codigo"
                            placeholder="Código"
                            defaultValue={memora.codigo || ""}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 pl-2">
                            Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            placeholder="Link"
                            defaultValue={memora.link}
                            className="bg-mainColor/20 border rounded-lg border-mainColor w-full focus:outline-none focus:bg-white focus:border-mainColor/80 transition-all duration-300 px-2 py-2"
                            required
                        />
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-700 text-sm">{success}</p>
                    </div>
                )}

                <div className="flex gap-4 justify-between mt-6 border-t border-mainColor/20">
                    <SubmitBtn />
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-secondaryColor/20 hover:bg-secondaryColor/30 text-gray-700 rounded-full px-6 py-2 transition-all duration-300 font-semibold"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditMemoraForm;
