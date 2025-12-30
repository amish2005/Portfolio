
import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export const handleContact: RequestHandler = async (req, res) => {
    try {
        const data = contactSchema.parse(req.body);

        // Debug: Check if env vars are loaded (don't log the password!)
        console.log("Attempting to send email...");
        console.log("EMAIL_USER present:", !!process.env.EMAIL_USER);
        console.log("EMAIL_PASS present:", !!process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 10000, // 10 seconds
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            replyTo: data.email,
            subject: `Portfolio Contact: ${data.subject}`,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: "Message sent successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: "Invalid input", errors: error.errors });
        } else {
            console.error("Email send error:", error);
            res.status(500).json({ message: "Failed to send message" });
        }
    }
};
