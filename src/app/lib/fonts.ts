import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";

export const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const fontClasses = `${geist.variable} ${geistMono.variable} ${instrumentSans.variable}`;
