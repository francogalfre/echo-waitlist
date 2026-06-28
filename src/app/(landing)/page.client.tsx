"use client";

import { useRef } from "react";

// import Demo from "~/components/landing/demo";
import Faq from "~/components/landing/faq";
import Features from "~/components/landing/features";
import Footer from "~/components/landing/footer";
import Hero from "~/components/landing/hero";
import { Confetti, type ConfettiRef } from "~/components/magicui/confetti";

export function LandingPage({ waitlistPeople }: { waitlistPeople: number }) {
    const confettiRef = useRef<ConfettiRef>(null);

    return (
        <main className="mx-auto max-w-screen-2xl w-full h-full flex-1 flex flex-col relative">
            <Confetti
                ref={confettiRef}
                className="fixed inset-0 z-50 pointer-events-none"
                manualstart={true}
            />
            <Hero waitlistPeople={waitlistPeople} />

            {/* <Demo videoSrc="/demo.mp4" thumbnailSrc="/demo.png" /> */}

            <Features />
            <Faq />
            <Footer />
        </main>
    );
}
