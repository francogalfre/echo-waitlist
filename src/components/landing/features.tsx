"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "~/providers/language-provider";

const icons = {
    collect: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    ),
    analyze: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
    ),
    showcase: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015A3.001 3.001 0 0 0 21 9.349m0 0V21" />
        </svg>
    ),
};

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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-8 py-16 px-5 sm:px-6 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
            }}
        >
            <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground text-center"
                variants={fadeUp}
                custom={0}
            >
                {t("features.title")}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        variants={fadeUp}
                        custom={index + 1}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative group"
                    >
                        <motion.div
                            className="relative flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border bg-card cursor-default overflow-hidden"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-accent/5 rounded-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Icon */}
                            <motion.div
                                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent"
                                animate={{
                                    scale: hoveredIndex === index ? 1.1 : 1,
                                    rotate: hoveredIndex === index ? 5 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {icons[feature.icon as keyof typeof icons]}
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-base font-semibold text-foreground mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
