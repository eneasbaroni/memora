"use server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleUpdateMemora = async (
    prevState: any,
    formData: FormData
) => {
    const ci = formData.get("ci");
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const email = formData.get("email");
    const codigo = formData.get("codigo");
    const link = formData.get("link");
    const originalCi = formData.get("originalCi");

    const data = { ci, nombre, apellido, email, codigo, link };

    try {
        const res = await fetch(`${baseUrl}/api/memora/${originalCi}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            return {
                error: errorData?.message || "Error al actualizar los datos",
            };
        }

        return { success: "Datos actualizados correctamente" };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return { error: "Error inesperado al actualizar los datos" };
    }
};
