// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/api/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.CONTACT_EMAIL,
//       subject: `New Contact Form Message from ${name}`,
//       text: message,
//       html: `<p>${message}</p><p>From: ${name} - ${email}</p>`,
//     });

//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
