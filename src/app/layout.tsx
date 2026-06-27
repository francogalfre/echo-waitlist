import { Toaster } from "sonner";

import "./globals.css";
import Header from "~/components/landing/header";
import SmoothScroll from "~/providers/smooth-scroll";
import { LanguageProvider } from "~/providers/language-provider";
import { fontClasses } from "./lib/fonts";
import { metadata } from "./lib/metadata";

export { metadata };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="h-full">
            <body className={`${fontClasses} antialiased flex flex-col h-full`}>
                <LanguageProvider>
                    <SmoothScroll>
                        <Header />
                        <Toaster />
                        {children}
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
