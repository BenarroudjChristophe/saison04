const students = require("../../data/students.json");
const promoController = require("./promoController");

const studentController = {
  studentDetail(req, res) {
    const promoId = req.params.id;

    const promo = students.filter((student) => student.promo == promoId);

    // on envoie l'entrée trouvée à la vue
    res.render("studentList", {
      promo,
    });
  },
};

module.exports = studentController;
