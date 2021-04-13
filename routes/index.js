var express = require('express');
var router = express.Router();
const doctorsController = require('../controllers/doctors')
const patientsController = require('../controllers/patients')
const prescriptionsController = require('../controllers/prescriptions')
const dashboardController = require('../controllers/dashboard')


/* GET home page. */
router.get('/', dashboardController.getAll)

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

  //Prescriptions
  .get("/prescription", prescriptionsController.getAll)
  .get("/prescription/create", prescriptionsController.getOne)
  .get("/prescription/:id", prescriptionsController.create)
  .post("/prescription", prescriptionsController.postCreate)
  .post('/prescription/:id', prescriptionsController.postUpdate)
  .delete("/prescription/:id", prescriptionsController.delete)





module.exports = router;
