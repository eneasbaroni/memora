/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectMongoDB } from "../../../../lib/mongodb";
import Memora from "../../DAO/models/memora.model";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ code: string }> }
) {
    const code = (await params).code;

    const ci = code;

    try {
        await connectMongoDB();
        const data = await Memora.findOne({ ci });
        /* if (!data) {
            return NextResponse.json({ message: "No se encontró el código" });
        } */

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ message: error.message });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ code: string }> }
) {
    const code = (await params).code;
    const data = await req.json();
    const { ci, nombre, apellido, email, codigo, link } = data;

    try {
        await connectMongoDB();

        const updateData = {
            ci,
            nombre,
            apellido,
            email,
            codigo,
            link,
        };

        const updatedMemora = await Memora.findOneAndUpdate(
            { ci: code },
            updateData,
            { new: true }
        );

        if (!updatedMemora) {
            return NextResponse.json(
                { message: "Memora no encontrada" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Memora actualizada correctamente",
            data: updatedMemora,
        });
    } catch (error: any) {
        if (error.code === 11000) {
            console.error("Error al actualizar: Clave duplicada", error);
            return NextResponse.json(
                { message: "El CI o el Link ya existen" },
                { status: 409 }
            );
        }
        console.error("Error al actualizar los datos:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
