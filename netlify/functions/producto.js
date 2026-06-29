const { Resend } = require("resend");
const templates = require("../../services/mailTemplates");

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

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { nombre, email, producto, precio } = JSON.parse(event.body || "{}");

  try {
    await Promise.all([
      sendEmail({
        to: process.env.EMAIL_ADMIN,
        subject: "Interesado en recetario",
        html: templates.productoAdmin({ nombre, email, producto, precio })
      }),
      sendEmail({
        to: email,
        subject: "Información del recetario",
        html: templates.productoCliente({ nombre, producto, precio })
      })
    ]);

    return { statusCode: 200, body: JSON.stringify({ message: "Información enviada 💚" }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: "Error al enviar correo" }) };
  }
};
