export default function CardGlow({ accent }: { accent: string }) {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            {/* soft orb */}
            <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-35"
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 60%)`,
                }}
            />
            {/* thin ring line */}
            <div
                className="absolute -right-16 -top-16 h-80 w-80 rounded-full opacity-0 transition duration-500 group-hover:opacity-35"
                style={{
                    background: `conic-gradient(from 180deg, transparent, ${accent}, transparent)`,
                    maskImage:
                        "radial-gradient(circle, transparent 63%, black 64%, black 64.8%, transparent 66%)",
                    WebkitMaskImage:
                        "radial-gradient(circle, transparent 63%, black 64%, black 64.8%, transparent 66%)",
                }}
            />
            {/* edge highlight */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(120%_100%_at_0%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
    );
}
