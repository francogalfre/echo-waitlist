"use client";

import { motion } from "motion/react";
import { useLanguage } from "~/providers/language-provider";

const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Features() {
    const { t, tArray } = useLanguage();
    const features = tArray("features.items") as Array<{
        icon: string;
        title: string;
        description: string;
    }>;

    return (
        <section>
            <div className="py-16 sm:py-20 md:py-24">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-8">
                    <motion.h2
                        className="text-foreground text-balance text-2xl sm:text-3xl md:text-4xl font-semibold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <span className="text-muted-foreground">{t("features.subtitle")}</span>{" "}
                        {t("features.title_suffix")}
                    </motion.h2>

                    <motion.div
                        className="@container mt-10 sm:mt-12 space-y-8 sm:space-y-10 md:space-y-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="space-y-2"
                                variants={fadeUp}
                                custom={index + 1}
                            >
                                <h3 className="text-lg sm:text-xl font-medium text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
