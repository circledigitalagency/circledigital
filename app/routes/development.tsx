import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { WorkCategory } from "~/lib/@types";
import { AccentGlow, categoryAccent } from "~/lib/utils";

import type { MetaFunction } from "@remix-run/node";

const DEVELOPMENT_TITLE =
    "Web Development Services | Circle Digital — Websites & Business Systems";

const DEVELOPMENT_DESCRIPTION =
    "Circle Digital builds fast, scalable websites and web systems designed for performance, clarity, and long-term growth. Product-minded development from strategy to launch.";

const DEVELOPMENT_IMAGE =
    "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770293728/Screenshot_2026-02-05_at_14.13.11_uf34i3.png";

const CANONICAL_URL = "https://circledigital.co.za/development";

export const meta: MetaFunction = () => {
    return [
        { title: DEVELOPMENT_TITLE },
        { name: "description", content: DEVELOPMENT_DESCRIPTION },

        // Canonical
        { tagName: "link", rel: "canonical", href: CANONICAL_URL },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Circle Digital" },
        { property: "og:title", content: DEVELOPMENT_TITLE },
        { property: "og:description", content: DEVELOPMENT_DESCRIPTION },
        { property: "og:url", content: CANONICAL_URL },
        { property: "og:image", content: DEVELOPMENT_IMAGE },
        { property: "og:image:alt", content: "Circle Digital development services hero image" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: DEVELOPMENT_TITLE },
        { name: "twitter:description", content: DEVELOPMENT_DESCRIPTION },
        { name: "twitter:image", content: DEVELOPMENT_IMAGE },
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
            <AccentGlow accent={categoryAccent("web" as WorkCategory,)} />
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

export default function DevelopmentPage() {
    return (
        <MainLayout>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202767/web-hero_ezwo2o.jpg"
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
                    <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">Development</p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
                        Websites and systems built to perform — not just exist.
                    </h1>

                    <p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
                        We design and develop fast, scalable digital experiences that support real business goals and hold up over time.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
                        >
                            Start a development project <ArrowUpRight className="ml-2 h-4 w-4" />
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
                            Most websites look fine. They just don’t work hard enough.
                        </h2>
                        <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
                            <p>
                                We often see websites that are slow, hard to maintain, and disconnected from how the business actually
                                operates. They look okay — but they don’t support growth.
                            </p>
                            <p>
                                Development isn’t just code. It’s building systems that support clarity, performance, and longevity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE BUILD */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="max-w-2xl">
                        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">What we build</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Product-minded development, end-to-end.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassCard
                            eyebrow="01 · Marketing Websites"
                            title="Brand-led, conversion-focused"
                            body="Fast, clean builds that communicate clearly and convert confidently."
                            items={[
                                "Performance-first architecture",
                                "Clear user journeys",
                                "CMS setups that are easy to manage",
                                "Launch-ready SEO fundamentals",
                            ]}
                        />
                        <GlassCard
                            eyebrow="02 · Web Apps & Tools"
                            title="Systems for real workflows"
                            body="Custom dashboards and tools designed around how your business actually runs."
                            items={[
                                "Admin platforms & dashboards",
                                "Custom logic and integrations",
                                "Scalable, maintainable codebases",
                                "Secure auth and roles (if needed)",
                            ]}
                        />
                        <GlassCard
                            eyebrow="03 · Infrastructure"
                            title="Quiet, reliable foundations"
                            body="Hosting, optimisation, and support that keep everything smooth behind the scenes."
                            items={[
                                "Hosting & deployment setup",
                                "Performance optimisation",
                                "Security and maintenance",
                                "Ongoing support options",
                            ]}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
