"use client";

import { useMemo, useState } from "react";

import People from "./people";
import imagotipoAccent from "../../app/assets/imagotipo-accent.png";
import Form from "./form";
import { useLanguage } from "~/providers/language-provider";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
    const year = useMemo(() => new Date().getFullYear(), []);
    const [isSuccess, setIsSuccess] = useState(false);
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center justify-center gap-6 min-h-screen px-4">
            <div className="flex flex-col items-center justify-center gap-6 mb-6">
                <img src={imagotipoAccent} />
                <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                    </span>
                    <p className="uppercase text-sm font-medium">
                        {t("hero.badge", { year: String(year) })}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {isSuccess ? t("hero.title_success") : t("hero.title")}
                </h1>
                <p className="text-base text-muted-foreground text-center max-w-md">
                    {isSuccess
                        ? t("hero.description_success")
                        : t("hero.description")}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
                <Form onSuccessChange={setIsSuccess} />
            </div>
            <div className="flex items-center justify-center gap-2">
                <People count={waitlistPeople} />
            </div>
        </div>
    );
}
