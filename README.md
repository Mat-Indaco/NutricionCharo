# Charo Nutrición — Sitio Web Oficial

Sitio web desarrollado para **@CharoNutricion**, nutricionista e influencer de Instagram especializada en alimentación simple y consciente.

## Sobre el proyecto

El sitio fue creado para centralizar la presencia online de Charo: presentar sus servicios, permitir reservas de turno, vender su recetario digital y facilitar el contacto con sus pacientes y seguidores.

### Páginas

- **Inicio** — presentación, servicios y propuesta de valor
- **Tienda** — recetario digital con flujo de compra por transferencia
- **Sobre mí** — historia, equipo y enfoque profesional
- **Contacto** — formulario directo de consultas

### Funcionalidades

- Formulario de **contacto** con respuesta automática por mail al cliente
- Formulario de **reserva de turno** con confirmación por mail
- Formulario de **compra de recetario** con instrucciones de pago por transferencia enviadas por mail
- Emails enviados con **Resend**
- Backend serverless con **Netlify Functions** (sin servidor, sin costo)
- Diseño responsive con efecto parallax y animaciones CSS

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML, CSS, JavaScript vanilla |
| Funciones serverless | Netlify Functions (Node.js) |
| Envío de emails | [Resend](https://resend.com) |
| Deploy | Netlify |

## Equipo

- **UX/UI Design** — Belén Mancini
- **Programación** — Matías Indaco

## Variables de entorno

Para correr el proyecto necesitás configurar estas variables (en Netlify → Site settings → Environment variables):

```
RESEND_API_KEY=
EMAIL_FROM=
EMAIL_ADMIN=
LOGO_URL=
```
