"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { getTranslations, type Locale } from "~/lib/i18n";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, params?: Record<string, string | number>) => string;
    tArray: (key: string) => unknown[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es");

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
    }, []);

    const translations = getTranslations(locale);

    return (
        <LanguageContext.Provider
            value={{
                locale,
                setLocale,
                t: translations.t,
                tArray: translations.tArray,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
