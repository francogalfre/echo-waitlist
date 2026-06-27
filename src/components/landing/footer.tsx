"use client";

import { useMemo } from "react";
import { useLanguage } from "~/providers/language-provider";

export default function Footer() {
	const year = useMemo(() => new Date().getFullYear(), []);
	const { t } = useLanguage();

	return (
		<footer className="flex flex-col justify-center items-center gap-4 pb-4 pt-8">
			<div className="flex flex-row items-center gap-4">
				<a
					href="#"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					{t("footer.privacy")}
				</a>
				<span className="text-muted-foreground">·</span>
				<a
					href="#"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					{t("footer.terms")}
				</a>
			</div>
			<div>
				<p className="text-sm text-muted-foreground">
					{t("footer.copyright", { year: String(year) })}
				</p>
			</div>
		</footer>
	);
}
