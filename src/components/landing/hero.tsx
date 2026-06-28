"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import People from "./people";
import Form from "./form";
import { useLanguage } from "~/providers/language-provider";

const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
    const year = useMemo(() => new Date().getFullYear(), []);
    const [isSuccess, setIsSuccess] = useState(false);
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center justify-center gap-2 pb-32 min-h-screen px-4">
            <motion.div
                className="flex flex-col items-center justify-center gap-6 mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
            >
                <img src="/imagotipo-accent.png" alt="Echo" className="w-24 h-auto" />
                <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                    </span>
                    <p className="uppercase text-sm font-medium">
                        {t("hero.badge", { year: String(year) })}
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center gap-4 pb-4 max-w-2xl"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
            >
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-center w-full whitespace-pre-line">
                    {isSuccess ? t("hero.title_success") : t("hero.title")}
                </h1>
                <p className="text-base text-md text-muted-foreground text-center align-middle justify-center max-w-lg">
                    {isSuccess
                        ? t("hero.description_success")
                        : t("hero.description")}
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center gap-2 w-full max-w-md"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
            >
                <Form onSuccessChange={setIsSuccess} />
            </motion.div>

            <motion.div
                className="flex items-center justify-center gap-2"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
            >
                <People count={waitlistPeople} />
            </motion.div>
        </div>
    );
}
