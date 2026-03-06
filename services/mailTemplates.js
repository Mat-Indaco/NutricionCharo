function contactoAdmin({ nombre, email, telefono }) {
  return `
    <h2>Nuevo contacto</h2>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Teléfono:</b> ${telefono}</p>
  `;
}

function contactoCliente({ nombre }) {
  return `
    <h2>Hola ${nombre} 💚</h2>
    <p>Gracias por contactarte.</p>
    <p>Te responderé a la brevedad.</p>
  `;
}

function productoAdmin({ nombre, email, telefono }) {
  return `
    <h2>Interesado en el recetario</h2>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Teléfono:</b> ${telefono}</p>
  `;
}

function productoCliente({ nombre }) {
  return `
    <h2>Hola ${nombre} 💚</h2>
    <p>Gracias por tu interés en el recetario.</p>
    <p>Te enviaré los detalles para obtenerlo.</p>
  `;
}

module.exports = {
  contactoAdmin,
  contactoCliente,
  productoAdmin,
  productoCliente
};