// on récupère les données
const promos = require("../../data/promos.json");

const client = require("../database");

const promoController = {
  promoDetail(req, res) {
    const requete = "SELECT id FROM promo";
    client.query("requete", (error, result) => {
      if (error) {
        console.trace(error);
      } else {
        res.render("promoDetail", { promo: result.name });
      }
    });
  },

  promoList(req, res) {
    res.render("promoList", { promos });
  },
};

module.exports = promoController;

// on récupère la valeur du paramètre de la route
// const promoId = req.params.id;
// on va chercher dans les données l'entrée qui possède l'id récupéré depuis l'url
// const foundPromo = promos.find((p) => p.id == promoId);
// on envoie l'entrée trouvée à la vue
