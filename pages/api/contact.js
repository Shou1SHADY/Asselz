import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, budget, timeframe, message } = req.body;

  try {
    console.log("🚀 Sending email from: ", process.env.EMAIL_USER);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing EMAIL_USER or  EMAIL_PASS in environment variables.");
    }

    // ✅ Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // ✅ Email account used to send emails
        pass: process.env.EMAIL_PASS,  // ✅ App Password (not regular password)
      },
    });

    console.log("✅ Transporter configured successfully");

    // ✅ Send Email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: "Asselzsupplying@gmail.com", 
      subject: "New Inquiry from Contact Form",
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${budget}
        Timeframe: ${timeframe}
        Message: ${message}
      `,
    });

    console.log("📩 Email sent successfully!");
    return res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("❌ Email Sending Error:", error);
    return res.status(500).json({ message: "Email could not be sent", error: error.message });
  }
}
