
import { RequestHandler } from "express";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export const handleContact: RequestHandler = async (req, res) => {
    try {
        const data = contactSchema.parse(req.body);

        // Debug: Check if Resend key is loaded
        console.log("Attempting to send email via Resend...");
        console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

        if (!process.env.RESEND_API_KEY) {
            throw new Error("RESEND_API_KEY is missing from environment variables");
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // Resend free tier requirement
            to: ["amish040404@gmail.com"], // Hardcoded or use EMAIL_USER if it's the target
            reply_to: data.email,
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
        });

        if (error) {
            console.error("Resend API error:", error);
            return res.status(500).json({ message: "Failed to send message via Resend", error });
        }

        res.json({ message: "Message sent successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: "Invalid input", errors: error.errors });
        } else {
            console.error("Contact form error:", error);
            res.status(500).json({ message: "Failed to send message" });
        }
    }
};
