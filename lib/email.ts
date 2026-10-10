
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (m) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[m]!
  );

function getSender() {
  const sender = process.env.MAIL_FROM;

  if (!sender || !process.env.RESEND_API_KEY) {
    throw new Error("MAIL_FROM or RESEND_API_KEY is missing");
  }

  return sender;
}

export async function sendProofSubmittedEmail(a: {
  name: string;
  email: string;
  phone: string;
  title: string;
  order: string;
  amount: number;
  transactionId: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL is missing");
  }

  return resend.emails.send({
    from: getSender(),
    to: [adminEmail],
    subject: `Payment proof submitted - ${a.title}`,
    html: `
      <h2>New payment proof submitted</h2>
      <p>A customer has submitted payment details for review.</p>
      <p><b>Order:</b> ${esc(a.order)}</p>
      <p><b>Project:</b> ${esc(a.title)}</p>
      <p><b>Customer:</b> ${esc(a.name)}</p>
      <p><b>Email:</b> ${esc(a.email)}</p>
      <p><b>Phone:</b> ${esc(a.phone || "Not provided")}</p>
      <p><b>Amount claimed:</b> INR ${a.amount.toFixed(2)}</p>
      <p><b>Transaction / UTR:</b> ${esc(a.transactionId)}</p>
      <p>Log in to your website admin panel to review the order.</p>
    `,
  });
}

export async function sendPaidEmail(a: {
  to: string;
  name: string;
  title: string;
  download: string;
  order: string;
}) {
  return resend.emails.send({
    from: getSender(),
    to: [a.to],
    subject: `SabkaCode: ${a.title} is ready`,
    html: `
      <h2>Payment verified</h2>
      <p>Hi ${esc(a.name)},</p>
      <p>Your payment for <b>${esc(a.title)}</b> was verified.</p>
      <p>Order: <b>${esc(a.order)}</b></p>
      <p><a href="${a.download}">Download project</a></p>
    `,
  });
}
