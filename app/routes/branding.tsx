import { ArrowUpRight } from "lucide-react";
import MainLayout from "~/components/layout/main";
import { WorkCategory } from "~/lib/@types";
import { AccentGlow, categoryAccent } from "~/lib/utils";

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

function StepCard({ n, t, d }: { n: string; t: string; d: string }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/50">{n}</p>
            <h3 className="mt-3 text-white font-medium">{t}</h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
        </div>
    );
}

export default function BrandingPage() {
    return (
        <MainLayout>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770202891/cta_dk2f0t.jpg"
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
                        Branding that gives your business direction - not just a look.
                    </h1>

                    <p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
                        We help brands clarify who they are, what they stand for, and how they show up — then translate that
                        clarity into identity systems built to last.
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
                        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">The problem</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">
                            Most brands don’t have a design problem. They have a clarity problem.
                        </h2>
                        <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
                            <p>
                                Too often, branding starts with visuals before direction. The result is a logo that looks good, but
                                doesn’t scale — and a brand that feels inconsistent across platforms.
                            </p>
                            <p>
                                Branding isn’t decoration. It’s alignment: between your business, your audience, and how you show up
                                in the world.
                            </p>
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
                            Branding built on three pillars.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <GlassCard
                            eyebrow="01 · Positioning"
                            title="Direction before design"
                            body="We define what you stand for, who you’re for, and why you matter — so every creative decision has a backbone."
                            items={["Brand positioning & purpose", "Audience clarity", "Competitive context", "Messaging foundations"]}
                        />
                        <GlassCard
                            eyebrow="02 · Identity"
                            title="A cohesive system"
                            body="We translate strategy into a visual and verbal identity system that stays consistent across touchpoints."
                            items={["Visual identity (logo, type, colour)", "Tone of voice direction", "System rules & usage"]}
                        />
                        <GlassCard
                            eyebrow="03 · Application"
                            title="Built for the real world"
                            body="We ensure the brand works where it actually lives: web, social, campaigns, and content."
                            items={["Digital-first thinking", "Website alignment", "Social/campaign guidance", "Asset preparation"]}
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS */}

            {/* FIT */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-3xl border border-green-600 bg-white/[0.03] p-7">
                            <p className="text-[11px] tracking-[0.35em] uppercase text-green-600">Good fit</p>
                            <h3 className="mt-3 text-lg font-medium text-white">Branding with Circle works best if:</h3>
                            <ul className="mt-4 space-y-2 text-sm text-white/65">
                                {[
                                    "You’re repositioning or growing",
                                    "You want long-term consistency",
                                    "You care about clarity and craft",
                                    "You want strategy + execution together",
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
                                    "You only need a quick logo",
                                    "You’re not ready to define positioning",
                                    "You want trends without substance",
                                    "You want branding without application",
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
