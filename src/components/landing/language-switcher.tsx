"use client";

import { motion } from "motion/react";
import { useLanguage } from "~/providers/language-provider";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-secondary rounded-full p-1 relative shadow-lg">
            <button
                type="button"
                onClick={() => setLocale("es")}
                className="relative px-3 py-1 rounded-full text-xs font-medium z-10"
            >
                {locale === "es" && (
                    <motion.span
                        layoutId="lang-indicator"
                        className="absolute inset-0 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                )}
                <span className={`relative z-10 ${locale === "es" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    ES
                </span>
            </button>
            <button
                type="button"
                onClick={() => setLocale("en")}
                className="relative px-3 py-1 rounded-full text-xs font-medium z-10"
            >
                {locale === "en" && (
                    <motion.span
                        layoutId="lang-indicator"
                        className="absolute inset-0 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                )}
                <span className={`relative z-10 ${locale === "en" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    EN
                </span>
            </button>
        </div>
    );
}
