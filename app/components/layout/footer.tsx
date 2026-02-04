import { ArrowUpRight, InstagramIcon, Linkedin, MailIcon, PhoneCallIcon } from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<a
		href={href}
		className="text-sm text-white/70 hover:text-white/85 transition inline-flex items-center gap-1"
	>
		{children}
	</a>
);

export default function Footer() {
	return (
		<footer className="relative overflow-hidden">
			{/* Background / ambience */}


			<div className="relative mx-auto container px-6 pt-8 pb-8">
				{/* Top grid */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10">
					{/* Brand */}
					<div className="md:col-span-5">
						<p className="max-w-md text-white/60 leading-relaxed">
							A creative studio building considered brands and high-performance digital experiences.
						</p>
					</div>

					{/* Links */}
					<div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
						<div className="space-y-3">
							<p className="text-[11px] tracking-[0.35em] uppercase text-white/50">
								Services
							</p>
							<div className="space-y-2 flex flex-col">
								<FooterLink href="/branding">Branding</FooterLink>
								<FooterLink href="/development">Development</FooterLink>
								<FooterLink href="/social">Social Media</FooterLink>
							</div>
						</div>

						<div className="space-y-3">
							<p className="text-[11px] tracking-[0.35em] uppercase text-white/50">
								Company
							</p>
							<div className="space-y-2 flex flex-col">
								<FooterLink href="/work">Work</FooterLink>
								<FooterLink href="/about">About</FooterLink>
								<FooterLink href="/contact-us">Contact</FooterLink>
							</div>
						</div>

						<div className="space-y-3">
							<p className="text-[11px] tracking-[0.35em] uppercase text-white/50">
								Contact
							</p>
							<div className="space-x-4">
								<FooterLink href="mailto:operations@circledigital.co.za"><MailIcon className="w-6 h-6" /></FooterLink>
								<FooterLink href="tel:+27828889494"><PhoneCallIcon className="w-6 h-6" /></FooterLink>
								<FooterLink href="https://www.instagram.com/circledigital.za/"><InstagramIcon className="w-6 h-6" /></FooterLink>
								<FooterLink href="https://www.linkedin.com/company/circle-digital-za/"><Linkedin className="w-6 h-6" /></FooterLink>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="mt-8 h-px w-full bg-white/10" />

				{/* Bottom bar */}
				<div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
					<p className="text-xs text-white/45">
						© {new Date().getFullYear()} Circle Digital. All rights reserved.
					</p>

					<div className="flex flex-wrap gap-x-6 gap-y-2">
						<p className="text-xs text-white/45">South Africa</p>
					</div>
					<a href="https://www.pexels.com/@mahmoudramadan/" target="_blank" className="text-xs text-white/45">Photos</a>
				</div>
			</div>
		</footer>
	);
}
