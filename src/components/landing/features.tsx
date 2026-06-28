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
        title: string;
        description: string;
    }>;

    return (
        <section>
            <div className="py-10 sm:py-12 md:py-16">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-8">
                    <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground"
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
                        className="mt-8 sm:mt-10 md:mt-12 rounded-2xl border border-border bg-secondary/50 overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <div className="aspect-video w-full flex items-center justify-center text-muted-foreground text-sm">
                            Imagen próximamente
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
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
                                custom={index + 2}
                            >
                                <h3 className="text-base sm:text-lg font-medium text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
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
