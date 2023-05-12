const express = require("express");
// pour utiliser notre fichier .env
require("dotenv").config();

const router = require("./app/router");
const app = express();

// le port est planqué dans le .env, on le récupère
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`projet démarré : http://localhost:${process.env.PORT}`);
});
