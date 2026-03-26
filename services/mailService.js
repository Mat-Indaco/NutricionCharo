const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmail({ to, subject, html }) {
  return transporter.sendMail({
    from: `"Nutrición Salud" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,attachments: [
    {
      filename: "logo.png",
      path: "./services/images/logo.png",
      cid: "logoFirma"
    }
  ]
  });
}

module.exports = sendEmail;