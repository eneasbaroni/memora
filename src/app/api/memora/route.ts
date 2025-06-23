/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";
import Memora from "../DAO/models/memora.model";

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("🚀 ~ POST ~ data:", data);
    const { ci, nombre, apellido, email, codigo, link } = data;
    try {
        await connectMongoDB();

        const newMemora = new Memora({
            ci,
            nombre,
            apellido,
            email,
            codigo,
            link,
        });
        await newMemora.save();

        return NextResponse.json({ message: "Data Memora saved" });
    } catch (error: any) {
        if (error.code === 11000) {
            // 11000 es el código de error de MongoDB para clave duplicada
            console.error("Error al guardar los datos: Clave duplicada", error);
            return NextResponse.json(
                { message: "El CI o el Link ya existen" },
                { status: 409 }
            ); // Devuelve 409 Conflict
        }
        console.error("Error al guardar los datos:", error);
        return NextResponse.json({ message: error.message }, { status: 500 }); // Devuelve 500 Internal Server Error para otros errores
    }
}

/* Get all */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();
        const data = await Memora.find({});
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error al obtener los datos:", error);
        return NextResponse.json({ message: error.message }, { status: 500 }); // Devuelve 500 Internal Server Error para otros errores
    }
}
