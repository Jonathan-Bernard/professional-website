import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Contact form submission from ${name}`,
      text: `Message from ${name} <${email}>: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "E-mail envoyé avec succès!" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      res.status(500).json({
        error: "Échec de l'envoi de l'e-mail",
        details: error.message,
      });
    }
  } else {
    res.status(405).json({ error: "Méthode Non Autorisée" });
  }
}
