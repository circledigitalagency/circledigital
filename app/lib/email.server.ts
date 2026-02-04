import { Resend } from "resend";
import { contactConfirmationEmail, contactNotificationEmail } from "./email";

const resendClient = new Resend(process.env.VITE_RESEND_API_KEY);

const FROM = "Circle Digital <operations@circledigital.co.za>";

/** Sends the internal notification email to your ops inbox */
export async function sendContactNotification(params: {
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
	const notif = contactNotificationEmail(params);

	return resendClient.emails.send({
		from: FROM,
		to: "kagisojoan@circledigital.co.za",
		cc: "edumisamadikiza@circledigital.co.za",
		replyTo: params.email,
		subject: notif.subject,
		text: notif.text,
		html: notif.html,
	});
}

/** Sends the confirmation email to the client */
export async function sendContactConfirmation(params: {
	name: string;
	email: string;
	service: string;
}) {
	const confirm = contactConfirmationEmail({
		name: params.name,
		service: params.service,
	});

	return resendClient.emails.send({
		from: FROM,
		to: [params.email],
		subject: confirm.subject,
		text: confirm.text,
		html: confirm.html,
	});
}

/** Convenience helper: send both internal + client emails */
export async function sendContactEmails(params: {
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
	// You can run these in parallel
	const [internal, client] = await Promise.all([
		sendContactNotification(params),
		sendContactConfirmation({
			name: params.name,
			email: params.email,
			service: params.service,
		}),
	]);

	return { internal, client };
}
