const students = require("../../data/students.json");
const promoController = require("./promoController");
const promos = require("../../data/promos.json");

const studentController = {
  studentDetail(req, res) {
    const promoId = req.params.id;

    const foundPromo = promos.find((p) => p.id == promoId);

    const promo = students.filter((student) => student.promo == promoId);

    // on envoie l'entrée trouvée à la vue
    res.render("studentList", {
      promo,
      foundPromo,
    });
  },
};

module.exports = studentController;
