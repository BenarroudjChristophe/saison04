const { Router } = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");

const router = Router();

router.get("/", mainController.homePage);
router.get("/promo", promoController.promoList);
router.get("/promo/:id", promoController.promoDetail);
router.get("/promo/:id/students", studentController.studentList);

module.exports = router;
