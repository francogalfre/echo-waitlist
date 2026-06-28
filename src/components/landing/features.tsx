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
    const { t, tArray, locale } = useLanguage();
    const features = tArray("features.items") as Array<{
        title: string;
        description: string;
    }>;

    return (
        <section>
            <div className="py-16 sm:py-20 md:py-24">
                <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-8">
                    <motion.h2
                        key={`title-${locale}`}
                        className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground whitespace-pre-line"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <span className="text-muted-foreground">{t("features.subtitle")}</span>{"\n"}
                        {t("features.title_suffix")}
                    </motion.h2>

                    <motion.div
                        key={`image-${locale}`}
                        className="mt-8 sm:mt-10 md:mt-12 rounded-2xl border border-border bg-secondary/50 overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <img
                            src="/features-image.png"
                            alt="Echo features"
                            className="w-full h-72 object-cover"
                        />
                    </motion.div>

                    <motion.div
                        key={`grid-${locale}`}
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
                                key={`${feature.title}-${locale}`}
                                className="space-y-2"
                                variants={fadeUp}
                                custom={index + 2}
                            >
                                <h3 className="text-base sm:text-lg font-medium text-foreground leading-tight">
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
