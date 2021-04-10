var express = require('express');
var router = express.Router();
const doctorsController = require('../controllers/doctors')
const patientsController = require('../controllers/patients')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
})

  //DOCTORS
  .get("/doctors", doctorsController.getAll)
  .get("/doctors/create", doctorsController.create)
  .get("/doctors/:id", doctorsController.getOne)
  .post("/doctors", doctorsController.postCreate)
  .post("/doctors/:id", doctorsController.postUpdate)
  .delete("/doctors/:id", doctorsController.delete)

  //PATIENTS
  .get("/patients", patientsController.getAll)
  .get("/patients/create", patientsController.create)
  .get("/patients/:id", patientsController.getOne)
  .post("/patients", patientsController.postCreate)
  .post("/patients/:id", patientsController.postUpdate)
  .delete("/patients/:id", patientsController.delete)
  .get('/doctors/:id/patients', doctorsController.patients)



module.exports = router;
