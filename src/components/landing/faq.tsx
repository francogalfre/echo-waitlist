"use client";

import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import { useLanguage } from "~/providers/language-provider";

const fadeUp = {
	hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function Faq() {
	const { t, tArray } = useLanguage();
	const faqItems = tArray("faq.items") as Array<{ question: string; answer: string }>;

	return (
		<motion.div
			className="flex flex-col items-center justify-center gap-6 py-10"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={{
				visible: { transition: { staggerChildren: 0.1 } },
			}}
		>
			<motion.div className="flex flex-col items-center justify-center gap-2 max-w-md" variants={fadeUp}>
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					{t("faq.title")}
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					{t("faq.description")}
				</p>
			</motion.div>
			<motion.div className="w-full max-w-lg" variants={fadeUp}>
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					{faqItems.map((item, index) => (
						<AccordionItem key={`faq-${index + 1}`} value={`item-${index + 1}`}>
							<AccordionTrigger className="hover:no-underline">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</motion.div>
		</motion.div>
	);
}
