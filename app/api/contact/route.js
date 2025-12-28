import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, // Use Gmail App Password
  },
});

// Email HTML template
const generateEmailTemplate = (name, email, message) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007BFF;">New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px;">${message}</blockquote>
      <p style="font-size: 12px; color: #888;">Reply directly to the sender's email.</p>
    </div>
  </div>
`;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Optional: Log to verify environment variables
    console.log("EMAIL_ADDRESS is set:", !!process.env.EMAIL_ADDRESS);
    console.log("GMAIL_PASSKEY is set:", !!process.env.GMAIL_PASSKEY);

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS, // your Gmail receives the message
      subject: `New Message from ${name}`,
      replyTo: email, // allows replying directly to sender
      html: generateEmailTemplate(name, email, message),
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
