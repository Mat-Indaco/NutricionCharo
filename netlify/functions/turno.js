const { Resend } = require("resend");
const templates = require("../../services/mailTemplates");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html }) {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    replyTo: "nutricion.charoolariaga@gmail.com",
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

  const { nombre, email } = JSON.parse(event.body || "{}");

  if (!nombre || !email) {
    return { statusCode: 400, body: JSON.stringify({ message: "Faltan datos" }) };
  }

  try {
    await Promise.all([
      sendEmail({
        to: process.env.EMAIL_ADMIN,
        subject: "Nueva Reserva Turno",
        html: templates.turnoAdmin({ nombre, email })
      }),
      sendEmail({
        to: email,
        subject: "Peticion de Turno",
        html: templates.turnoCliente({ nombre })
      })
    ]);

    return { statusCode: 200, body: JSON.stringify({ message: "Mensaje enviado correctamente 💚" }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: "Error al enviar correo" }) };
  }
};
