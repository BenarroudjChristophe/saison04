const students = require("../../data/students.json");
const promoController = require("./promoController");

const studentController = {
  studentDetail(req, res) {
    const promo = students.filter((student) => student.promo == req.params.id);
    for (const student of promo) {
      let studentId = student.id;
      let studentPromo = student.promo;
      let studentGitHubUserName = student.github_username;
      let studentFirstName = student.first_name;
      let studentLastName = student.last_name;
      let studentPicture = student.profile_picture_url;

      // const studentId = req.params.id.students;
      // console.log(studentId);
      // const foundStudent = students.filter((student) => student.promo === promo);

      // on envoie l'entrée trouvée à la vue
      res.render("studentList", {
        studentId,
        studentPromo,
        studentGitHubUserName,
        studentFirstName,
        studentLastName,
        studentPicture,
      });
    }
  },
};

module.exports = studentController;
