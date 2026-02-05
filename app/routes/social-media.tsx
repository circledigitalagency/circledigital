import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { WorkCategory } from "~/lib/@types";
import { AccentGlow, categoryAccent } from "~/lib/utils";
import type { MetaFunction } from "@remix-run/node";

const SOCIAL_TITLE =
    "Social Media & Content Production | Circle Digital — Strategy, Shoots & Systems";

const SOCIAL_DESCRIPTION =
    "Circle Digital helps brands build a consistent social presence through content strategy, high-quality video production, planned shoots, and social systems designed for long-term growth.";

const SOCIAL_IMAGE =
    "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770293738/Screenshot_2026-02-05_at_14.13.22_xbxen9.png";

const CANONICAL_URL = "https://circledigital.co.za/social-media";

export const meta: MetaFunction = () => {
    return [
        { title: SOCIAL_TITLE },
        { name: "description", content: SOCIAL_DESCRIPTION },

        // Canonical
        { tagName: "link", rel: "canonical", href: CANONICAL_URL },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Circle Digital" },
        { property: "og:title", content: SOCIAL_TITLE },
        { property: "og:description", content: SOCIAL_DESCRIPTION },
        { property: "og:url", content: CANONICAL_URL },
        { property: "og:image", content: SOCIAL_IMAGE },
        { property: "og:image:alt", content: "Circle Digital social media and content production hero image" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SOCIAL_TITLE },
        { name: "twitter:description", content: SOCIAL_DESCRIPTION },
        { name: "twitter:image", content: SOCIAL_IMAGE },
    ];
};


function GlassCard({
    eyebrow,
    title,
    body,
    items,
}: {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
}) {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl hover:bg-white/[0.06] transition">
            <AccentGlow accent={categoryAccent("social" as WorkCategory,)} />
            <p className="relative text-[11px] tracking-[0.35em] uppercase text-white/55">{eyebrow}</p>
            <h3 className="relative mt-3 text-lg font-medium text-white">{title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-white/65">{body}</p>

            <ul className="relative mt-5 space-y-2 text-sm text-white/65">
                {items.map((t) => (
                    <li key={t} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40" />
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SocialMediaPage() {
    return (
        <MainLayout>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202766/social-hero_kwogrp.jpg"
                    alt="Abstract 3D metallic sculpture"
                    className="absolute -inset-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] object-cover object-center"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.9) 100%),
              radial-gradient(80% 70% at 50% 55%, transparent 40%, rgba(0,0,0,0.55) 100%)
            `,
                    }}
                />

                <div className="relative mx-auto container px-6 pt-10 md:pt-28 pb-16">
                    <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
                        Social Media & Content Production
                    </p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
                        Social media built on content — not trends.
                    </h1>

                    <p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
                        We help brands show up consistently and intentionally through high-quality content, planned production, and
                        social systems designed for growth.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
                        >
                            Start a content project <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="/work"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
                        >
                            View work
                        </a>
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="max-w-3xl">
                        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">The problem</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Most brands don’t have a posting problem. They have a content problem.
                        </h2>
                        <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
                            <p>
                                Posting more doesn’t fix inconsistency. Chasing trends doesn’t build trust. Strong presence comes from
                                clear direction, quality content, and intentional planning.
                            </p>
                            <p>That’s where we focus.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILLARS */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="max-w-2xl">
                        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">What we do</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Social built on three pillars.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassCard
                            eyebrow="01 · Content Strategy"
                            title="Direction before output"
                            body="We decide what to create, why it matters, and how it supports your goals — before the camera comes out."
                            items={[
                                "Content direction aligned to brand",
                                "Platform-specific planning",
                                "Monthly/campaign content plans",
                                "Shoot concepts & creative direction",
                            ]}
                        />
                        <GlassCard
                            eyebrow="02 · Content Production"
                            title="High-quality creation"
                            body="We plan shoots and create video content that feels intentional — not rushed."
                            items={[
                                "Short-form video content",
                                "Planned shoots (on-site or studio)",
                                "Shot lists & content briefs",
                                "Editing aligned to your brand system",
                            ]}
                        />
                        <GlassCard
                            eyebrow="03 · Social Systems"
                            title="Consistency that holds"
                            body="Content only works when it’s deployed properly — with structure, messaging, and review."
                            items={[
                                "Scheduling & publishing",
                                "Captions and messaging direction",
                                "Performance review & iteration",
                                "Template systems and rollout",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FIT */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-3xl border border-green-600 bg-white/[0.03] p-7">
                            <p className="text-[11px] tracking-[0.35em] uppercase text-green-600">Good fit</p>
                            <h3 className="mt-3 text-lg font-medium text-white">This is a good fit if:</h3>
                            <ul className="mt-4 space-y-2 text-sm text-white/65">
                                {[
                                    "You want content that reflects your brand",
                                    "You’re ready to plan shoots and campaigns",
                                    "You value quality over volume",
                                    "You want a system, not reactive posting",
                                ].map((t) => (
                                    <li key={t} className="flex gap-2">
                                        <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-red-600 bg-white/[0.03] p-7">
                            <p className="text-[11px] tracking-[0.35em] uppercase text-red-600">Not a fit</p>
                            <h3 className="mt-3 text-lg font-medium text-white">This isn’t the right fit if:</h3>
                            <ul className="mt-4 space-y-2 text-sm text-white/65">
                                {[
                                    "You need daily posts with no strategy",
                                    "You want trend-chasing content",
                                    "You’re not ready to invest in production",
                                    "You want quantity at the expense of craft",
                                ].map((t) => (
                                    <li key={t} className="flex gap-2">
                                        <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
