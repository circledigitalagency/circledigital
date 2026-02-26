import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { WorkCategory } from "~/lib/@types";
import { AccentGlow, categoryAccent } from "~/lib/utils";
import type { MetaFunction } from "@remix-run/node";

const BRANDING_TITLE =
    "Brand Repositioning & Identity | Circle Digital";

const BRANDING_DESCRIPTION =
    "Circle Digital helps growing businesses reposition their brand with clearer messaging, premium identity systems, and guidelines built for long-term consistency.";

const BRANDING_IMAGE =
    "https://res.cloudinary.com/dfxorvtuc/image/upload/v1770293730/Screenshot_2026-02-05_at_14.12.59_jcgzct.png";

const CANONICAL_URL = "https://circledigital.co.za/branding";

export const meta: MetaFunction = () => {
    return [
        { title: BRANDING_TITLE },
        { name: "description", content: BRANDING_DESCRIPTION },

        // Canonical
        { tagName: "link", rel: "canonical", href: CANONICAL_URL },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Circle Digital" },
        { property: "og:title", content: BRANDING_TITLE },
        { property: "og:description", content: BRANDING_DESCRIPTION },
        { property: "og:url", content: CANONICAL_URL },
        { property: "og:image", content: BRANDING_IMAGE },
        { property: "og:image:alt", content: "Circle Digital branding services hero image" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: BRANDING_TITLE },
        { name: "twitter:description", content: BRANDING_DESCRIPTION },
        { name: "twitter:image", content: BRANDING_IMAGE },
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
            <AccentGlow accent={categoryAccent("branding" as WorkCategory,)} />
            <p className="relative text-[11px] tracking-[0.35em] uppercase text-purple-400/55">{eyebrow}</p>
            <h3 className="relative mt-3 text-xl font-medium text-white">{title}</h3>
            <p className="relative mt-2 text-base leading-relaxed text-white/65">{body}</p>

            <ul className="relative mt-5 space-y-2 text-base text-white/65">
                {items.map((t) => (
                    <li key={t} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-purple-400/40" />
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BrandingPage() {
    return (
        <MainLayout>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202766/branding-hero_wvq666.jpg"
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
                    <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">Branding</p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
                        Brand repositioning that upgrades credibility — not just aesthetics.
                    </h1>

                    <p className="mt-6 text-white/65 leading-relaxed max-w-2xl text-lg">
                        We help growing businesses clarify positioning, sharpen messaging, and translate that clarity into
                        a premium identity system that stays consistent across every touchpoint.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
                        >
                            Start a branding project <ArrowUpRight className="ml-2 h-4 w-4" />
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
                        <p className="text-[11px] tracking-[0.35em] uppercase text-purple-400/60">The problem</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Most brands don’t have a logo problem. They have a positioning problem.
                        </h2>
                        <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
                            <p>
                                Too often, branding starts with visuals before direction. The result is a brand that looks good
                                but doesn’t land - inconsistent messaging, unclear value, and a presence that doesn’t reflect the
                                level of the business.
                            </p>
                            <p>
                                Branding is alignment: between who you are, who you serve, and what you want to be known for.
                                When that’s clear, design becomes a system and credibility becomes consistent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILLARS */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="max-w-2xl">
                        <p className="text-[11px] tracking-[0.35em] uppercase text-purple-400/60">What we do</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Repositioning, translated into a brand system.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassCard
                            eyebrow="01 · Positioning"
                            title="Direction before design"
                            body="We define what you stand for, who you’re for, and what makes you different so every creative decision has direction."
                            items={["Brand positioning & purpose", "Audience clarity", "Competitive context", "Messaging foundations"]}
                        />
                        <GlassCard
                            eyebrow="02 · Identity"
                            title="A cohesive system"
                            body="We translate strategy into a cohesive identity system that stays consistent across platforms and scales as you grow."
                            items={["Visual identity (logo, type, colour)", "Tone of voice direction", "System rules & usage"]}
                        />
                        <GlassCard
                            eyebrow="03 · Application"
                            title="Built for the real world"
                            body="We make sure the brand works where it actually lives — web, social, campaigns, and content so it shows up with clarity in the real world."
                            items={["Digital-first thinking", "Website alignment", "Social/campaign guidance", "Asset preparation"]}
                        />
                    </div>
                </div>
            </section>

            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl">

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            {/* Left */}
                            <div className="max-w-xl">
                                <p className="text-[11px] tracking-[0.35em] uppercase text-purple-400/60">
                                    What this gives you
                                </p>
                                <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-white">
                                    Clarity that compounds.
                                </h3>
                                <p className="mt-4 text-white/65 leading-relaxed">
                                    When positioning is clear and the system is cohesive, your brand becomes easier to understand,
                                    easier to trust, and easier to grow.
                                </p>
                            </div>

                            {/* Right */}
                            <ul className="space-y-3 text-sm md:text-[15px] text-white/75">
                                {[
                                    "Sharper positioning and messaging",
                                    "Premium credibility across touchpoints",
                                    "Consistency your team can maintain",
                                    "Clear direction for marketing and content",
                                    "A brand foundation built for scale",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400/40 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                    </div>
                </div>
            </section>

            {/* FIT */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Good fit */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl hover:bg-white/[0.06] transition">
                            <p className="text-[11px] tracking-[0.35em] uppercase text-emerald-400/90">
                                Good fit
                            </p>
                            <h3 className="mt-3 text-lg font-medium text-white">
                                Branding with Circle works best if:
                            </h3>
                            <ul className="mt-5 space-y-2 text-sm text-white/65">
                                {[
                                    "You’ve outgrown your current brand or messaging",
                                    "You want premium credibility and long-term consistency",
                                    "You’re ready to define positioning (not just pick colours)",
                                    "You want strategy + execution in one team",
                                ].map((t) => (
                                    <li key={t} className="flex gap-2 text-base">
                                        <span className="mt-[7px] h-1 w-1 rounded-full bg-emerald-400/40" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                        </div>

                        {/* Not a fit */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl hover:bg-white/[0.06] transition">
                            <p className="text-[11px] tracking-[0.35em] uppercase text-rose-400/90">
                                Not a fit
                            </p>
                            <h3 className="mt-3 text-lg font-medium text-white">
                                This probably isn’t the right fit if:
                            </h3>
                            <ul className="mt-5 space-y-2 text-sm text-white/65">
                                {[
                                    "You only need a quick logo with no strategy",
                                    "You want trends without clarity underneath",
                                    "You’re not ready for feedback loops and direction-setting",
                                    "You want branding without real-world application",
                                ].map((t) => (
                                    <li key={t} className="flex gap-2 text-base">
                                        <span className="mt-[7px] h-1 w-1 rounded-full bg-rose-400/25" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
