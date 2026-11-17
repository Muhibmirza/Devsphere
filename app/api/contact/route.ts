import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "devsphere.cop@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message, website } = await request.json();

    if (website) return NextResponse.json({ ok: true });
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email) || name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Please check the submitted details." }, { status: 400 });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      return NextResponse.json({ error: "Email service is temporarily unavailable." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass: pass.replace(/\s/g, "") },
    });

    await transporter.sendMail({
      from: `DevSphere Website <${user}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `New DevSphere inquiry from ${name.trim()}`,
      text: `A new inquiry was submitted on the DevSphere website.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nProject details:\n${message.trim()}`,
      html: `<h2>New DevSphere project inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name.trim())}</p><p><strong>Email:</strong> ${escapeHtml(email.trim())}</p><p><strong>Project details:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message.trim())}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: "Unable to send your message." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] || character);
}
