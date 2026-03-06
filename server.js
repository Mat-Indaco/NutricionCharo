require("dotenv").config();
const express = require("express");
const path = require("path");
const contactoRoutes = require("./services/contactoRoutes");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use("/api", contactoRoutes);


const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

app.use(limiter);

// =====================
// INICIAR SERVIDOR
// =====================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});