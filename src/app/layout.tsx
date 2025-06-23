import type { Metadata } from "next";
import localfont from "next/font/local";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

const moneta = localfont({
    src: [
        {
            path: "../fonts/Moneta-Regular.ttf",
            weight: "400",
        },
        {
            path: "../fonts/Moneta-Bold.ttf",
            weight: "700",
        },
        {
            path: "../fonts/Moneta-Black.ttf",
            weight: "900",
        },
    ],
    variable: "--font-moneta",
});

const safira = localfont({
    src: [
        {
            path: "../fonts/Safira.ttf",
        },
    ],
    variable: "--font-safira",
});

export const metadata: Metadata = {
    title: "Memora",
    description: "Memora, espacio para la memoria",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${raleway.variable} ${playfairDisplay.variable} ${moneta.variable} ${safira.variable} antialiased font-raleway`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
