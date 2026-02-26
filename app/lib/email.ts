export function contactConfirmationEmail(params: {
	name: string;
	service: string;
}) {
	const { name, service } = params;

	const subject = `Enquiry received — Circle Digital`;

	const text = [
		`Hi ${name},`,
		``,
		`Thanks for reaching out to Circle Digital — we’ve received your enquiry.`,
		`We’ll review your details and respond within 1–2 business days with a recommended next step.`,
		``,
		`What happens next:`,
		`- We review your goals, context, and timelines`,
		`- We reply with a recommended approach + scope direction`,
		`- If it’s a fit, we’ll suggest a short discovery call`,
		``,
		`If you have anything to add (a brief, references, Loom, or a link), just reply to this email.`,
		``,
		`— Circle Digital`,
		``,
		`Service selected: ${service}`,
	].join("\n");

	const html = `
	<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6;">
	  <p style="margin:0 0 12px;">Hi ${escape(name)},</p>
  
	  <p style="margin:0 0 12px;">
		Thanks for reaching out to <strong>Circle Digital</strong> — we’ve received your enquiry.
		We’ll review your details and respond within <strong>1–2 business days</strong> with a recommended next step.
	  </p>
  
	  <div style="margin:16px 0; padding:14px; border:1px solid rgba(0,0,0,0.08); border-radius:12px;">
		<p style="margin:0 0 10px; font-weight:600;">What happens next</p>
		<ul style="margin:0; padding-left:18px;">
		  <li>We review your goals, context, and timelines</li>
		  <li>We reply with a recommended approach + scope direction</li>
		  <li>If it’s a fit, we’ll suggest a short discovery call</li>
		</ul>
	  </div>
  
	  <p style="margin:0 0 12px;">
		If you’d like to add anything (a brief, references, Loom, or a link), you can reply directly to this email.
	  </p>
  
	  <p style="margin:18px 0 0;">
		<strong>— Circle Digital</strong>
	  </p>
  
	  <p style="margin:10px 0 0; font-size:12px; color:rgba(0,0,0,0.55);">
		Service selected: ${escape(service)}
	  </p>
	</div>`;

	return { subject, text, html };
}

function escape(s: string) {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

export function contactNotificationEmail(params: {
	name: string;
	email: string;
	company?: string;
	website?: string;
	service: string;
	budget: string;
	timeline: string;
	goals: string;
	notes?: string;
	referenceLink?: string;
}) {
	const {
		name,
		email,
		company,
		website,
		service,
		budget,
		timeline,
		goals,
		notes,
		referenceLink,
	} = params;

	const subject = `New enquiry — ${service} · ${budget} · ${timeline} — ${name}${
		company ? ` (${company})` : ""
	}`;

	const text = [
		`New enquiry`,
		``,
		`Name: ${name}`,
		`Email: ${email}`,
		`Company: ${company || "-"}`,
		`Website: ${website || "-"}`,
		`Service: ${service}`,
		`Budget: ${budget}`,
		`Timeline: ${timeline}`,
		`Reference: ${referenceLink || "-"}`,
		``,
		`Goals:`,
		goals,
		``,
		`Notes:`,
		notes || "-",
	].join("\n");

	const html = `
	<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
	  <h2 style="margin:0 0 12px;">New enquiry</h2>
  
	  <div style="margin:12px 0 18px; padding:14px; border:1px solid rgba(0,0,0,0.08); border-radius:12px;">
		<p style="margin:0 0 8px; font-weight:600;">Summary</p>
		<p style="margin:0; color:rgba(0,0,0,0.75);">
		  <strong>${escape(service)}</strong> · ${escape(budget)} · ${escape(timeline)}
		  ${company ? ` · ${escape(company)}` : ""}
		</p>
	  </div>
  
	  <table style="border-collapse:collapse; width:100%; margin:16px 0;">
		<tbody>
		  ${row("Name", escape(name))}
		  ${row("Email", `<a href="mailto:${escape(email)}">${escape(email)}</a>`)}
		  ${row("Company", escape(company || "—"))}
		  ${row(
				"Website",
				website ? `<a href="${escape(website)}">${escape(website)}</a>` : "—",
			)}
		  ${row("Service", escape(service))}
		  ${row("Budget", escape(budget))}
		  ${row("Timeline", escape(timeline))}
		</tbody>
	  </table>
  
	  <h3 style="margin:18px 0 8px;">Goals</h3>
	  <div style="white-space:pre-wrap; line-height:1.6; padding:12px; border:1px solid rgba(0,0,0,0.08); border-radius:12px;">
		${escape(goals)}
	  </div>
  
	  <h3 style="margin:18px 0 8px;">Notes</h3>
	  <div style="white-space:pre-wrap; line-height:1.6; padding:12px; border:1px solid rgba(0,0,0,0.08); border-radius:12px;">
		${escape(notes || "—")}
	  </div>
  
	  <h3 style="margin:18px 0 8px;">Reference link</h3>
	  <div style="padding:12px; border:1px solid rgba(0,0,0,0.08); border-radius:12px;">
		${
			referenceLink
				? `<a href="${escape(referenceLink)}">${escape(referenceLink)}</a>`
				: "—"
		}
	  </div>
	</div>`;

	return { subject, text, html };
}

function row(label: string, value: string) {
	return `
      <tr>
        <td style="padding:8px 10px; font-weight:600; width:160px; border-bottom:1px solid rgba(0,0,0,0.06);">${label}</td>
        <td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.06);">${value}</td>
      </tr>
    `;
}
