const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html }) {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    reply_to: "nutricion.charoolariaga@gmail.com",
    to,
    subject,
    html
  });

  if (error) throw error;
}

module.exports = sendEmail;