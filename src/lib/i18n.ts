import es from "~/i18n/es.json";
import en from "~/i18n/en.json";

const translations = { es, en } as const;
export type Locale = keyof typeof translations;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    return path.split(".").reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
            return (acc as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj) as string;
}

export function getTranslations(locale: Locale = "es") {
    const t = translations[locale] || translations.es;

    return {
        t: (key: string, params?: Record<string, string | number>): string => {
            let value = getNestedValue(t as unknown as Record<string, unknown>, key);
            if (params) {
                for (const [k, v] of Object.entries(params)) {
                    value = value.replace(`{${k}}`, String(v));
                }
            }
            return value;
        },
        tArray: (key: string): unknown[] => {
            const keys = key.split(".");
            let result: unknown = t;
            for (const k of keys) {
                if (result && typeof result === "object" && k in (result as Record<string, unknown>)) {
                    result = (result as Record<string, unknown>)[k];
                } else {
                    return [];
                }
            }
            return Array.isArray(result) ? result : [];
        },
        locale,
    };
}
