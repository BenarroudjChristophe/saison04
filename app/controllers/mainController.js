// on récpère les données du json
const promos = require("../../data/promos.json");

const mainController = {
  homePage(req, res) {
    res.render("home", { promos });
  },
};

module.exports = mainController;
