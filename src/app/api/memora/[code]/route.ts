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
