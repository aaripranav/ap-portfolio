import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Send email to your inbox
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your verified domain
      to: "aaripranav@gmail.com", // Your email
      replyTo: email,
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0e27; color: #00f5ff; padding: 24px; border-radius: 12px;">
          <div style="margin-bottom: 16px;">
            <strong style="color: #7b2eff;">FROM:</strong> ${name} &lt;${email}&gt;
          </div>
          <div style="margin-bottom: 16px;">
            <strong style="color: #7b2eff;">MESSAGE:</strong>
          </div>
          <div style="background: #12172e; padding: 12px; border-radius: 8px; border-left: 3px solid #00f5ff; white-space: pre-wrap; word-wrap: break-word;">
${message}
          </div>
          <div style="margin-top: 24px; font-size: 12px; color: #70a0aa;">
            Sent from: Portfolio Contact Form
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    // Also send confirmation email to the user
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <div style="font-family: monospace; background: #0a0e27; color: #00f5ff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #7b2eff;">packet_received</h2>
          <p>Hey ${name},</p>
          <p>Thanks for reaching out! I received your message and will get back to you soon.</p>
          <p style="margin-top: 24px; color: #70a0aa; font-size: 12px;">
            Aari Pranav<br/>
            Cyber Security Student & Researcher
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
