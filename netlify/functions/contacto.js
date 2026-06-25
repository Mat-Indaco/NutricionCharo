const { Resend } = require("resend");
const templates = require("../../services/mailTemplates");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html }) {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html
  });
  if (error) throw error;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { nombre, email, mensaje } = JSON.parse(event.body || "{}");

  if (!nombre || !email) {
    return { statusCode: 400, body: JSON.stringify({ message: "Faltan datos" }) };
  }

  try {
    await Promise.all([
      sendEmail({
        to: process.env.EMAIL_ADMIN,
        subject: "Nuevo contacto web",
        html: templates.contactoAdmin({ nombre, email, mensaje })
      }),
      sendEmail({
        to: email,
        subject: "Recibimos tu mensaje 💚",
        html: templates.contactoCliente({ nombre })
      })
    ]);

    return { statusCode: 200, body: JSON.stringify({ message: "Mensaje enviado correctamente 💚" }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: "Error al enviar correo" }) };
  }
};
