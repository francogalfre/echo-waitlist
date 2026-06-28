"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { useLanguage } from "~/providers/language-provider";

export default function Footer() {
	const year = useMemo(() => new Date().getFullYear(), []);
	const { t } = useLanguage();

	return (
		<motion.footer
			className="flex flex-col justify-center items-center gap-4 pb-8 pt-16 px-4"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="flex flex-row items-center gap-4">
				<a
					href="https://linkedin.com/in/francogalfre"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
				>
					LinkedIn
				</a>
				<span className="text-muted-foreground">·</span>
				<a
					href="https://x.com/francogalfredev"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
				>
					X / Twitter
				</a>
			</div>
			<div>
				<p className="text-sm text-muted-foreground">
					{t("footer.copyright", { year: String(year) })}
				</p>
			</div>
		</motion.footer>
	);
}
