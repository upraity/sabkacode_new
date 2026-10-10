
import nodemailer from "nodemailer";

const getTransporter = () => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP_USER or SMTP_PASS is missing");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
};

const getSender = () => {
  const sender = process.env.MAIL_FROM;
  if (!sender) throw new Error("MAIL_FROM is missing");
  return sender;
};

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

async function sendEmail(
  to: string,
  subject: string,
  html: string
) {
  const transporter = getTransporter();

  return transporter.sendMail({
    from: getSender(),
    to,
    subject,
    html,
    replyTo: process.env.REPLY_TO_EMAIL || process.env.SMTP_USER,
  });
}

export async function sendOrderCreatedEmail(a: {
  name: string;
  email: string;
  title: string;
  order: string;
  amount: number;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");

  return sendEmail(
    adminEmail,
    `New SabkaCode order - ${a.title}`,
    `
      <h2>New project order</h2>
      <p>A customer has created a new order.</p>
      <p><b>Order:</b> ${esc(a.order)}</p>
      <p><b>Project:</b> ${esc(a.title)}</p>
      <p><b>Customer:</b> ${esc(a.name)}</p>
      <p><b>Customer email:</b> ${esc(a.email)}</p>
      <p><b>Expected amount:</b> INR ${a.amount.toFixed(2)}</p>
      <p>Payment is not yet verified.</p>
    `
  );
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
  if (!adminEmail) throw new Error("ADMIN_EMAIL is missing");

  return sendEmail(
    adminEmail,
    `Payment proof submitted - ${a.title}`,
    `
      <h2>New payment proof submitted</h2>
      <p><b>Order:</b> ${esc(a.order)}</p>
      <p><b>Project:</b> ${esc(a.title)}</p>
      <p><b>Customer:</b> ${esc(a.name)}</p>
      <p><b>Email:</b> ${esc(a.email)}</p>
      <p><b>Phone:</b> ${esc(a.phone || "Not provided")}</p>
      <p><b>Amount claimed:</b> INR ${a.amount.toFixed(2)}</p>
      <p><b>Transaction / UTR:</b> ${esc(a.transactionId)}</p>
      <p>Review the payment in your SabkaCode admin panel.</p>
    `
  );
}

export async function sendPaidEmail(a: {
  to: string;
  name: string;
  title: string;
  download: string;
  order: string;
}) {
  return sendEmail(
    a.to,
    `SabkaCode: ${a.title} is ready`,
    `
      <h2>Payment verified</h2>
      <p>Hi ${esc(a.name)},</p>
      <p>Your payment for <b>${esc(a.title)}</b> was verified.</p>
      <p>Order: <b>${esc(a.order)}</b></p>
      <p><a href="${esc(a.download)}">Download project</a></p>
    `
  );
}

export async function sendTestEmail(to: string) {
  return sendEmail(
    to,
    "SabkaCode SMTP test",
    "<h2>Email test successful</h2><p>Your Gmail SMTP configuration is working.</p>"
  );
}
