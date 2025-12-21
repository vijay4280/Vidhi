const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // 1️⃣ Save to DB
  const contact = await Contact.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  // 2️⃣ Send Email to ADMIN
  await sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: "📩 New Contact Form Message",
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  res.json({ success: true, message: "Message sent successfully" });
};

