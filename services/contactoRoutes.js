const express = require("express");
const router = express.Router();

const sendEmail = require("../services/mailService");
const templates = require("../services/mailTemplates");

router.post("/contacto", async (req, res) => {

  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ message: "Faltan datos" });
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

    res.json({ message: "Mensaje enviado correctamente 💚" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Error al enviar correo" });

  }

});

router.post("/turno", async (req, res) => {

  const { nombre, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ message: "Faltan datos" });
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

    res.json({ message: "Mensaje enviado correctamente 💚" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Error al enviar correo" });

  }

});

router.post("/producto", async (req, res) => {
  
  console.log("POST /producto recibido");
  console.log(req.body);

  const { nombre, email, producto, precio } = req.body;

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
        html: templates.productoCliente({ nombre , producto, precio})
      })

    ]);

    res.json({ message: "Información enviada 💚" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Error al enviar correo" });

  }

});

module.exports = router;