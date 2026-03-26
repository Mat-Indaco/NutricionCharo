function turnoAdmin({ nombre, email }) {
  return `
    <h2>Nuevo contacto</h2>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <td>
    <img src="cid:logoFirma" width="120"/>
    </td>
  `;
}

function turnoCliente({ nombre }) {
  return `
    <h2>Hola ${nombre} 💚</h2>
    <p>Gracias por interesarte en trabajar con Charo Nutrición ✨.</p>
    <p>A la brevedad me contactaré con ustedes.</p>
    <td>
    <img src="cid:logoFirma" width="120"/>
    </td>
  `;
}



function contactoAdmin({ nombre, email,mensaje }) {
  return `
    <h2>Nuevo contacto</h2>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>mensaje:</b> ${mensaje}</p>
    <td>
    <img src="cid:logoFirma" width="120"/>
    </td>
  `;
}

function contactoCliente({ nombre }) {
  return `
    <h2>Hola ${nombre} 💚</h2>
    <p>Gracias por interesarte en trabajar con Charo Nutrición ✨.</p>
    <p>A la brevedad me contactaré con ustedes.</p>
    <td>
    <img src="cid:logoFirma" width="120"/>
    </td>
  `;
}

function productoAdmin({ nombre, email, telefono }) {
  return `
    <h2>Interesado en el recetario</h2>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Teléfono:</b> ${telefono}</p>
    <td>
    <img src="cid:logoFirma" width="120"/>
    </td>
  `;
}

function productoCliente({ nombre,producto,precio }) {
  return `
<table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif; color:#333; max-width:600px; margin:auto;">

<tr>
<td>

<h2 style="margin-bottom:10px;">Hola ${nombre} 💚</h2>

<p style="line-height:1.6;">
Gracias por interesarte en <strong> ${producto}</strong>. Estoy segura de que te van a encantar 🤍

<div class="timeline">
<div class="timeline-line"></div>

</p>

<p style="line-height:1.6;">
Para continuar con la compra, por favor transferí: <strong>${precio}</strong> a siguiente alias:
</p>

</td>
</tr>

<tr>
<td style="background:#f4f4f4; padding:15px; text-align:center; border-radius:6px; margin:20px 0;">
<h1 style="margin:0; letter-spacing:1px;">
ALIAS: CHARO.NUTRICION
</h1>
</td>
</tr>

<tr>
<td>

<p style="line-height:1.6;">
Una vez realizada la transferencia, enviá el comprobante respondiendo este mail.
</p>

<p style="margin-top:25px;">
Gracias! ✨
</p>

</td>
</tr>

<tr>
<td style="padding-top:25px; border-top:1px solid #eee;">

<table>

<tr>

<td>
<img src="cid:logoFirma" width="90"/>
</td>

<td style="padding-left:12px; font-size:14px; line-height:1.4;">

<b>Lic. Charo Olariaga</b><br>
Nutricionista<br>
<span style="color:#6b6b6b">Alimentación simple y consciente</span>

</td>

</tr>

</table>

</td>
</tr>

</table>
`;
}

module.exports = {
  contactoAdmin,
  contactoCliente,
  productoAdmin,
  productoCliente,
  turnoCliente,
  turnoAdmin
};