import * as React from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Link } from "@remix-run/react";
import Logo from "../image/logo";

type NavItem = { label: string; path: string; note?: string };

export const NAV_ITEMS: NavItem[] = [
    { label: "About", path: "/about-us" },
    { label: "Branding", path: "/branding", note: "Identity & brand language" },
    { label: "Web Development", path: "/development", note: "Build, performance, SEO" },
    { label: "Social Media", path: "/social-media", note: "Content, campaigns, growth" },
    { label: "Our Work", path: "/work" },
];

export function FullscreenMenu() {
    const [open, setOpen] = React.useState(false);

    // Close on ESC
    React.useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    // Lock body scroll when open
    React.useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="hidden sm:flex items-center space-x-6">
            {/* Your existing CTA can stay */}
            <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
                Get in touch  <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Replace "Menu" with an image button */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="
    relative text-white text-sm tracking-widest uppercase
    after:absolute after:left-0 after:-bottom-1
    after:h-[1px] after:w-0 after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  "
            >
                Menu
            </button>


            {/* Fullscreen overlay */}
            {open && (
                <div
                    id="fullscreen-nav"
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-[9999]"
                >
                    {/* Backdrop */}
                    <button
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <div className="relative h-full w-full">
                        {/* Top bar */}
                        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-8 py-6">
                            <Logo />

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                            >
                                Close <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex h-full items-center px-8">
                            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Main links */}
                                <nav className="flex flex-col gap-4 pt-16 lg:pt-0">
                                    {NAV_ITEMS.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setOpen(false)}
                                            className="group text-white"
                                        >
                                            <div className="flex items-baseline justify-between">
                                                <span className="text-4xl md:text-5xl font-light tracking-tight">
                                                    {item.label}
                                                </span>
                                                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
                                            </div>

                                            {item.note && (
                                                <div className="mt-1 text-white/60 text-sm">
                                                    {item.note}
                                                </div>
                                            )}

                                            <div className="mt-4 h-px bg-white/10" />
                                        </Link>
                                    ))}
                                </nav>

                                {/* Right column: optional extras */}
                                <div className="hidden lg:flex flex-col justify-center">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white">
                                        <div className="text-sm text-white/60 uppercase tracking-widest">
                                            Start a project
                                        </div>
                                        <div className="mt-3 text-2xl font-light">
                                            Tell us where you are in your digital journey.
                                        </div>
                                        <Link
                                            to="/contact-us"
                                            onClick={() => setOpen(false)}
                                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm hover:opacity-90 transition"
                                        >
                                            Get in touch <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom hint */}
                        <div className="absolute bottom-6 left-8 text-white/40 text-xs tracking-widest uppercase">
                            Press ESC to close
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
