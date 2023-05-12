// on recupere le client du module postgres

const { Client } = require("pg");

// on definit la connexion à la BDD

const pgClient = new Client(
  "postgresql://etudiant:js4life@pg.oclock.lan/trombi"
);

// on lance la connexion à la BDD

pgClient.connect();

// on exporte le client
module.exports = pgClient;
