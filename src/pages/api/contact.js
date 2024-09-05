import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // You can use any email service provider, e.g., Gmail, Mailgun, SendGrid, etc.
    // Example using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password or OAuth
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address to receive the message
      subject: `!!! New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Email failed to send" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
