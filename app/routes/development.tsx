import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { WorkCategory } from "~/lib/@types";
import { AccentGlow, categoryAccent } from "~/lib/utils";

import type { MetaFunction } from "@remix-run/node";

const DEVELOPMENT_TITLE =
    "High-Performance Websites & Web Systems | Circle Digital";

const DEVELOPMENT_DESCRIPTION =
    "Circle Digital builds high-performance websites and web systems that improve credibility and convert attention into enquiries. Product-minded development from strategy to launch.";

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
            <p className="relative text-[11px] tracking-[0.35em] uppercase text-blue-400/55">{eyebrow}</p>
            <h3 className="relative mt-3 text-xl font-medium text-white">{title}</h3>
            <p className="relative mt-2 text-base leading-relaxed text-white/65">{body}</p>

            <ul className="relative mt-5 space-y-2 text-white/65">
                {items.map((t) => (
                    <li key={t} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-blue-400/40" />
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
                        Websites and systems built to convert — fast, clear, and credible.
                    </h1>

                    <p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
                        We design and develop high-performance websites and web platforms that turn attention into enquiries, support real workflows, and stay easy to maintain as you grow.
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
                        <p className="text-[11px] tracking-[0.35em] uppercase text-blue-400/60">The problem</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Most websites don’t fail visually. They fail commercially.
                        </h2>
                        <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
                            <p>
                                We often see sites that look good but load slowly, bury the message, and leave visitors unsure what to do next. The result is weak conversion: fewer enquiries, slower trust, and missed opportunities.
                            </p>
                            <p>
                                Development is not just code - it’s building a system that supports credibility, performance, and growth over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl">

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            <div className="max-w-xl">
                                <p className="text-[11px] tracking-[0.35em] uppercase text-blue-400/60">
                                    What this gives you
                                </p>
                                <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-white">
                                    A digital presence that works harder.
                                </h3>
                                <p className="mt-4 text-white/65 leading-relaxed">
                                    Beyond design, we build systems that load fast, convert clearly, and support
                                    how your business actually operates.
                                </p>
                            </div>

                            <ul className="space-y-3 text-sm md:text-[15px] text-white/75">
                                {[
                                    "Faster load times and improved UX",
                                    "Clear conversion paths and CTAs",
                                    "Reduced manual admin through smarter systems",
                                    "Scalable architecture for future growth",
                                    "A platform your team can confidently manage",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400/40 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                    </div>
                </div>
            </section>

            {/* WHAT WE BUILD */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="max-w-2xl">
                        <p className="text-[11px] tracking-[0.35em] uppercase text-blue-400/60">What we build</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Conversion-led builds, engineered for the real world.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassCard
                            eyebrow="01 · Marketing Websites"
                            title="Brand-led, conversion-focused"
                            body="Fast, brand-led websites with clear messaging and journeys designed to drive enquiries."
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
                            body="Custom dashboards and tools built around your workflow so less manual admin, more momentum."
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
                            body="Quiet infrastructure that keeps everything stable - deployment, performance, security, and support."
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
