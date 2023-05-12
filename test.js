const client = require("./app/database");

const requete = "SELECT * FROM promos ORDER BY name";

client.query(requete, (error, result) => {
  if (error) {
    console.trace(error);
  } else {
    console.log(result.rows);
  }
});
