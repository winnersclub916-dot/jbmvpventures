"use server";

import nodemailer from "nodemailer";
import { contactSchema } from "@/utils/validations/schema";


export async function sendContactMail(formData: FormData) {
    const raw = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
        return { success: false, errors: parsed.error.flatten().fieldErrors };
    }

    const { name, email, phone, message } = parsed.data;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"WINNERS Group" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIEVER_EMAIL_USER || process.env.EMAIL_USER,
            subject: `📩 New Contact from ${name}`,
            html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Mail Error:", error);
        return { success: false, error: "Failed to send message. Please try again later." };
    }
}
