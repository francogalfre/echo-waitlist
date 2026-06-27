"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import { useLanguage } from "~/providers/language-provider";

export default function Faq() {
	const { t, tArray } = useLanguage();
	const faqItems = tArray("faq.items") as Array<{ question: string; answer: string }>;

	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10">
			<div className="flex flex-col items-center justify-center gap-2 max-w-md">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					{t("faq.title")}
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					{t("faq.description")}
				</p>
			</div>
			<div className="w-full max-w-lg">
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
			</div>
		</div>
	);
}
