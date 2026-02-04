import * as React from "react";
import { z } from "zod";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

import MainLayout from "~/components/layout/main";
import { FieldLabel, Select, TextArea, Input, Card } from "~/components/ui/form-helpers";
import { sendContactEmails } from "~/lib/email.server";

/** -------------------------
 *  Zod schema
 *  ------------------------- */
export const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required").max(100, "Name is too long"),
	email: z.string().email("Please enter a valid email address"),

	company: z.string().min(1, "Company name is required").max(120, "Company is too long"),
	website: z
		.union([z.literal(""), z.string().url("Please enter a valid website URL")])
		.optional()
		.or(z.literal("")),

	service: z.enum(["Branding", "Development", "Social + Content", "Not sure yet"]),
	budget: z.enum(["R10k–R25k", "R25k–R50k", "R50k–R100k", "R100k+", "Not sure"]),
	timeline: z.enum(["ASAP", "2–4 weeks", "1–2 months", "3+ months", "Not sure"]),

	goals: z
		.string()
		.min(10, "Please tell us a bit more about your goals")
		.max(2000, "Goals is too long"),

	notes: z.string().max(3000, "Notes is too long").optional().or(z.literal("")),

	referenceLink: z
		.union([z.literal(""), z.string().url("Please enter a valid reference link")])
		.optional()
		.or(z.literal("")),
});

export type ActionData = {
	success: boolean;
	errors?: Record<string, string[]>;
	formErrors?: string;
};

/** -------------------------
 *  Remix action
 *  ------------------------- */
export async function action({ request }: ActionFunctionArgs) {
	try {
		const formData = await request.formData();

		const raw = {
			name: String(formData.get("name") ?? ""),
			email: String(formData.get("email") ?? ""),
			company: String(formData.get("company") ?? ""),
			website: String(formData.get("website") ?? ""),
			service: String(formData.get("service") ?? "Not sure yet"),
			budget: String(formData.get("budget") ?? "Not sure"),
			timeline: String(formData.get("timeline") ?? "Not sure"),
			goals: String(formData.get("goals") ?? ""),
			notes: String(formData.get("notes") ?? ""),
			referenceLink: String(formData.get("referenceLink") ?? ""),
		};

		const parsed = contactFormSchema.safeParse(raw);

		console.log("parsed.errors: ", parsed?.error?.flatten())

		if (!parsed.success) {
			const flattened = parsed.error.flatten();
			return json<ActionData>(
				{
					success: false,
					errors: flattened.fieldErrors as Record<string, string[]>,
					formErrors: flattened.formErrors?.[0],
				},
				{ status: 400 }
			);
		}


		await sendContactEmails({
			name: parsed.data.name,
			email: parsed.data.email,
			company: parsed.data.company,
			website: parsed.data.website,
			service: parsed.data.service,
			budget: parsed.data.budget,
			timeline: parsed.data.timeline,
			goals: parsed.data.goals,
			notes: parsed.data.notes,
			referenceLink: parsed.data.referenceLink,
		});

		return json<ActionData>({ success: true });
	} catch (err) {
		return json<ActionData>(
			{
				success: false,
				formErrors: "Something went wrong. Please try again.",
			},
			{ status: 500 }
		);
	}
}

/** -------------------------
 *  Page
 *  ------------------------- */
type FormState = z.infer<typeof contactFormSchema>;

const initial: FormState = {
	name: "",
	email: "",
	company: "",
	website: "",
	service: "Not sure yet",
	budget: "Not sure",
	timeline: "Not sure",
	goals: "",
	notes: "",
	referenceLink: "",
};

export default function ContactPage() {
	const actionData = useActionData<ActionData>();
	const navigation = useNavigation();

	const [form, setForm] = React.useState<FormState>(initial);

	const submitting = navigation.state === "submitting";
	const sent = !!actionData?.success;

	function update<K extends keyof FormState>(key: K, value: FormState[K]) {
		setForm((p) => ({ ...p, [key]: value }));
	}

	React.useEffect(() => {
		if (sent) setForm(initial);
	}, [sent]);

	const errors = actionData?.errors ?? {};
	const fieldError = (name: keyof FormState) => errors[name]?.[0];

	return (
		<MainLayout>
			{/* HERO */}
			<section className="relative overflow-hidden">
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1770204270/work-hero_nmm1zi.jpg"
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

				<div className="relative mx-auto container px-6 pt-24 md:pt-28 pb-12">
					<p className="text-[11px] tracking-[0.35em] uppercase text-white/60">Contact</p>
					<h1 className="mt-5 text-4xl md:text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
						Let’s build something considered.
					</h1>
					<p className="mt-6 text-white/65 leading-relaxed max-w-2xl">
						Tell us what you’re working on and what “success” looks like. We’ll reply with clear next steps.
					</p>
				</div>
			</section>

			{/* CONTENT */}
			<section className="relative py-12 md:py-16">
				<div className="mx-auto container px-6">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
						{/* FORM */}
						<div className="lg:col-span-8">
							<Card className="p-6 md:p-8">
								{!sent ? (
									<>
										<div className="flex items-end justify-between gap-6">
											<div>
												<FieldLabel>Project intake</FieldLabel>
												<h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-white">
													Tell us the basics.
												</h2>
												<p className="mt-3 text-white/65 leading-relaxed max-w-2xl">
													The more context you share, the faster we can respond with an accurate scope.
												</p>
											</div>
										</div>

										{actionData?.formErrors ? (
											<p className="mt-6 text-sm text-red-200/90">{actionData.formErrors}</p>
										) : null}

										<Form method="post" className="mt-8 space-y-8">
											{/* Contact basics */}
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div className="space-y-2">
													<FieldLabel>Your name</FieldLabel>
													<Input
														name="name"
														value={form.name}
														onChange={(e) => update("name", e.target.value)}
														placeholder="Your name"
														aria-invalid={!!fieldError("name")}
													/>
													{fieldError("name") ? (
														<p className="text-xs text-red-200/90">{fieldError("name")}</p>
													) : null}
												</div>

												<div className="space-y-2">
													<FieldLabel>Email</FieldLabel>
													<Input
														name="email"
														type="email"
														value={form.email}
														onChange={(e) => update("email", e.target.value)}
														placeholder="you@company.com"
														aria-invalid={!!fieldError("email")}
													/>
													{fieldError("email") ? (
														<p className="text-xs text-red-200/90">{fieldError("email")}</p>
													) : null}
												</div>

												<div className="space-y-2">
													<FieldLabel>Company</FieldLabel>
													<Input
														name="company"
														value={form.company}
														onChange={(e) => update("company", e.target.value)}
														placeholder="Company / brand name"
														aria-invalid={!!fieldError("company")}
													/>
													{fieldError("company") ? (
														<p className="text-xs text-red-200/90">{fieldError("company")}</p>
													) : null}
												</div>

												<div className="space-y-2">
													<FieldLabel>Website (optional)</FieldLabel>
													<Input
														name="website"
														value={form.website}
														onChange={(e) => update("website", e.target.value)}
														placeholder="https://"
														aria-invalid={!!fieldError("website")}
													/>
													{fieldError("website") ? (
														<p className="text-xs text-red-200/90">{fieldError("website")}</p>
													) : null}
												</div>
											</div>

											{/* Project selectors */}
											<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
												<div className="space-y-2">
													<FieldLabel>Service</FieldLabel>
													<Select
														name="service"
														value={form.service}
														onChange={(e) => update("service", e.target.value as FormState["service"])}
													>
														<option>Branding</option>
														<option>Development</option>
														<option>Social + Content</option>
														<option>Not sure yet</option>
													</Select>
												</div>

												<div className="space-y-2">
													<FieldLabel>Budget</FieldLabel>
													<Select
														name="budget"
														value={form.budget}
														onChange={(e) => update("budget", e.target.value as FormState["budget"])}
													>
														<option>R10k–R25k</option>
														<option>R25k–R50k</option>
														<option>R50k–R100k</option>
														<option>R100k+</option>
														<option>Not sure</option>
													</Select>
												</div>

												<div className="space-y-2">
													<FieldLabel>Timeline</FieldLabel>
													<Select
														name="timeline"
														value={form.timeline}
														onChange={(e) => update("timeline", e.target.value as FormState["timeline"])}
													>
														<option>ASAP</option>
														<option>2–4 weeks</option>
														<option>1–2 months</option>
														<option>3+ months</option>
														<option>Not sure</option>
													</Select>
												</div>
											</div>

											{/* Goals */}
											<div className="space-y-2">
												<FieldLabel>What are we building — and why?</FieldLabel>
												<TextArea
													name="goals"
													value={form.goals}
													onChange={(e) => update("goals", e.target.value)}
													placeholder="Example: We need a website that communicates our offer clearly and increases enquiries…"
													aria-invalid={!!fieldError("goals")}
												/>
												{fieldError("goals") ? (
													<p className="text-xs text-red-200/90">{fieldError("goals")}</p>
												) : null}
											</div>

											{/* Notes */}
											<div className="space-y-2">
												<FieldLabel>Any extra context (optional)</FieldLabel>
												<TextArea
													name="notes"
													value={form.notes}
													onChange={(e) => update("notes", e.target.value)}
													placeholder="Anything that helps: audience, constraints, content readiness…"
													aria-invalid={!!fieldError("notes")}
												/>
												{fieldError("notes") ? (
													<p className="text-xs text-red-200/90">{fieldError("notes")}</p>
												) : null}
											</div>

											{/* Link */}
											<div className="space-y-2">
												<FieldLabel>Reference link (optional)</FieldLabel>
												<Input
													name="referenceLink"
													value={form.referenceLink}
													onChange={(e) => update("referenceLink", e.target.value)}
													placeholder="Figma / Drive / Loom / inspiration links"
													aria-invalid={!!fieldError("referenceLink")}
												/>
												{fieldError("referenceLink") ? (
													<p className="text-xs text-red-200/90">{fieldError("referenceLink")}</p>
												) : (
													<p className="text-xs text-white/45 leading-relaxed">
														If you have a brief, deck, or examples, drop a link here. (No attachments needed.)
													</p>
												)}
											</div>

											{/* Submit */}
											<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
												<p className="text-sm text-white/50">
													Typical response time: <span className="text-white/70">within 1–2 business days</span>.
												</p>

												<button
													type="submit"
													disabled={submitting}
													className={[
														"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
														"bg-white text-black hover:bg-white/90",
														"disabled:opacity-60 disabled:cursor-not-allowed",
													].join(" ")}
												>
													{submitting ? "Sending…" : "Send enquiry"}
													<ArrowUpRight className="ml-2 h-4 w-4" />
												</button>
											</div>
										</Form>
									</>
								) : (
									<div className="py-10 md:py-14 text-center">
										<div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
											<CheckCircle2 className="h-6 w-6 text-white/85" />
										</div>
										<h2 className="mt-6 text-2xl md:text-3xl font-medium text-white">
											Enquiry received.
										</h2>
										<p className="mt-3 text-white/65 max-w-xl mx-auto leading-relaxed">
											Thanks — we’ll review your details and respond with clear next steps.
										</p>

										<div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
											<a
												href="/work"
												className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition backdrop-blur"
											>
												View our work
											</a>
										</div>
									</div>
								)}
							</Card>
						</div>

						{/* RIGHT RAIL */}
						<div className="lg:col-span-4 space-y-6">
							<Card className="p-6">
								<FieldLabel>Good to know</FieldLabel>
								<h3 className="mt-4 text-lg font-medium text-white">What makes projects go smoothly</h3>
								<ul className="mt-4 space-y-3 text-sm text-white/65">
									{[
										"A clear goal (what success means to you)",
										"Access to existing brand assets (if any)",
										"Content readiness (or we can help plan it)",
										"One decision-maker for feedback",
									].map((t) => (
										<li key={t} className="flex gap-2">
											<span className="mt-[7px] h-1 w-1 rounded-full bg-white/40" />
											{t}
										</li>
									))}
								</ul>
							</Card>

							<Card className="p-6">
								<FieldLabel>Contact</FieldLabel>
								<h3 className="mt-4 text-lg font-medium text-white">Reach us directly</h3>

								<div className="mt-5 space-y-4 text-sm text-white/65">
									<div className="flex gap-3">
										<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 grid place-items-center">
											<Mail className="h-4 w-4 text-white/70" />
										</div>
										<div>
											<p className="text-white/80 font-medium">Email</p>
											<p className="text-white/60">operations@circledigital.co.za</p>
										</div>
									</div>

									<div className="flex gap-3">
										<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 grid place-items-center">
											<Phone className="h-4 w-4 text-white/70" />
										</div>
										<div>
											<p className="text-white/80 font-medium">Phone</p>
											<p className="text-white/60">+27 82 888 9494</p>
										</div>
									</div>

									<div className="flex gap-3">
										<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 grid place-items-center">
											<MapPin className="h-4 w-4 text-white/70" />
										</div>
										<div>
											<p className="text-white/80 font-medium">Location</p>
											<p className="text-white/60">South Africa (remote-friendly)</p>
										</div>
									</div>

									<div className="flex gap-3">
										<div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 grid place-items-center">
											<Clock className="h-4 w-4 text-white/70" />
										</div>
										<div>
											<p className="text-white/80 font-medium">Hours</p>
											<p className="text-white/60">Mon–Fri, 9:00–17:00</p>
										</div>
									</div>
								</div>

								<div className="mt-6 pt-6 border-t border-white/10">
									<p className="text-xs text-white/45 leading-relaxed">
										Prefer a quick call? Send your enquiry with your availability and we’ll suggest a time.
									</p>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
