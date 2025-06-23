import { useFormStatus } from "react-dom";
import { handleSubmit } from "./actions";
import { useActionState, useEffect } from "react";

import { useRef } from "react";
import Loader from "@/components/shared/loader";

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <>
            {pending && <Loader />}
            <button
                type="submit"
                className="group border border-black rounded-full w-24 py-2 m-auto hover:bg-white transition-all duration-300"
                disabled={pending}
            >
                <p className="group-hover:text-[#968ab9] transition-all duration-300">
                    Enviar
                </p>
            </button>
        </>
    );
};

const MemoraForm = () => {
    const ref = useRef<HTMLFormElement>(null); // For form reset
    const [state, action] = useActionState(handleSubmit, null);
    const error = state?.error;
    const success = state?.success;

    useEffect(() => {
        if (success) {
            ref.current?.reset();
        }
    }, [success]);

    return (
        <>
            <form
                className="flex flex-col gap-4 w-auto m-auto mt-4"
                action={action}
                ref={ref}
            >
                <div className="flex flex-row gap-8 mobile:gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <input
                            type="text"
                            id="ci"
                            name="ci"
                            placeholder="ci"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            id="codigo"
                            name="codigo"
                            placeholder="Código"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                        />
                        <input
                            type="text"
                            id="link"
                            name="link"
                            placeholder="Link"
                            className="bg-transparent border-b border-black w-[320px] mobile:w-[calc(100%-1rem)] focus:outline-none"
                            required
                        />
                    </div>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && (
                    <p className="text-green-500 text-center">{success}</p>
                )}

                <SubmitBtn />
            </form>
        </>
    );
};
export default MemoraForm;
