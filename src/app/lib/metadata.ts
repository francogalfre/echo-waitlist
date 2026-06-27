import type { Metadata } from "next";
import { site } from "./site";

export const metadata: Metadata = {
    title: site.title,
    description: site.description,
    keywords: [
        "feedback",
        "user feedback",
        "feedback widget",
        "feedback API",
        "AI analytics",
        "user insights",
        "product feedback",
        "echo",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    metadataBase: new URL(site.url),
    openGraph: {
        type: "website",
        locale: "es_AR",
        url: site.url,
        siteName: site.name,
        title: site.title,
        description: site.description,
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Echo - Feedback Intelligence Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
        images: ["/twitter-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: site.url,
    },
};
