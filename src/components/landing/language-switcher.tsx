"use client";

import { useLanguage } from "~/providers/language-provider";
import { cn } from "~/lib/utils";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
                type="button"
                onClick={() => setLocale("es")}
                className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-all",
                    locale === "es"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground",
                )}
            >
                ES
            </button>
            <button
                type="button"
                onClick={() => setLocale("en")}
                className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-all",
                    locale === "en"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground",
                )}
            >
                EN
            </button>
        </div>
    );
}
