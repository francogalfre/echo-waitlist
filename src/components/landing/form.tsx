"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "~/providers/language-provider";

interface FormProps {
    onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
    const searchParams = useSearchParams();
    const refCode = searchParams.get("ref");
    const { t } = useLanguage();

    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [shareLink, setShareLink] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (step === 1) {
            if (!formData.email || !isValidEmail(formData.email)) {
                toast.error(t("form.error_email"));
                return;
            }
            setStep(2);
            return;
        }

        try {
            setLoading(true);

            const payload = {
                firstname: formData.name || formData.email.split("@")[0],
                email: formData.email,
                referredBy: refCode || undefined,
            };

            const mailRes = await fetch("/api/mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!mailRes.ok) {
                const err = mailRes.status === 429 ? "Rate limited" : "Email failed";
                throw new Error(err);
            }

            const notionRes = await fetch("/api/notion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!notionRes.ok) {
                const errData = await notionRes.json();
                if (notionRes.status === 409) {
                    toast.error(errData.error || "You're already on the waitlist!");
                    return;
                }
                const err = notionRes.status === 429 ? "Rate limited" : "Notion failed";
                throw new Error(err);
            }

            const { code } = await notionRes.json();
            const link = `${window.location.origin}/?ref=${code}`;
            setShareLink(link);

            toast.success(t("form.success_toast"));
            setSuccess(true);
            onSuccessChange?.(true);

            setTimeout(() => {
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ["#6B5CE7", "#8B7CF7", "#A59CF7", "#C4BCFF"],
                });
            }, 150);

            setFormData({ email: "", name: "" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                const msg =
                    error.message === "Rate limited"
                        ? t("form.error_rate")
                        : t("form.error_generic");
                toast.error(msg);
            }
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setStep(1);
        setFormData({ email: "", name: "" });
        setSuccess(false);
        setShareLink("");
        onSuccessChange?.(false);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareLink);
        toast.success("Link copied!");
    };

    return (
        <div className="w-full relative">
            {success ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <p className="text-lg font-medium">
                        {t("form.share_title")}
                    </p>
                    <div className="flex items-center gap-2 max-w-sm mx-auto">
                        <input
                            value={shareLink}
                            readOnly
                            className="flex-1 px-3 py-2 border border-border rounded-lg text-foreground text-sm bg-secondary"
                        />
                        <button
                            type="button"
                            onClick={copyLink}
                            className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90"
                        >
                            {t("form.copy")}
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="text-sm text-muted-foreground underline"
                    >
                        {t("form.join_another")}
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="relative">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="email"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex relative"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("form.email_placeholder")}
                                    className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                    disabled={loading}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute text-sm right-0 top-0 bottom-0 bg-accent text-accent-foreground px-5 py-1 m-2 rounded-[12px] hover:opacity-90 disabled:opacity-50"
                                    disabled={loading}
                                >
                                    {t("form.continue")}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="name"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-3"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("form.name_placeholder")}
                                    className="w-full bg-background border border-border text-foreground px-4 py-3 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-accent text-accent-foreground py-3 rounded-[12px] font-semibold hover:opacity-90 disabled:opacity-50 flex items-center justify-center"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>Loading</title>
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            {t("form.joining")}
                                        </>
                                    ) : (
                                        t("form.join_waitlist")
                                    )}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            )}
        </div>
    );
}
