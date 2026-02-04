export function FieldLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
            {children}
        </p>
    );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={[
                "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3",
                "text-white placeholder:text-white/35 outline-none",
                "focus:border-white/25 focus:bg-white/[0.05] transition",
            ].join(" ")}
        />
    );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            {...props}
            className={[
                "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3",
                "text-white outline-none",
                "focus:border-white/25 focus:bg-white/[0.05] transition",
            ].join(" ")}
        />
    );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={[
                "w-full min-h-[120px] rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3",
                "text-white placeholder:text-white/35 outline-none",
                "focus:border-white/25 focus:bg-white/[0.05] transition",
            ].join(" ")}
        />
    );
}

export function Card({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl",
                className,
            ].join(" ")}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(120,180,255,0.45),transparent_60%)]" />
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle_at_30%_30%,rgba(170,120,255,0.40),transparent_60%)]" />
            <div className="relative">{children}</div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </div>
    );
}