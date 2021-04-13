const Patient = require('../models/patient');
const Prescription = require('../models/prescriptions')
const Doctor = require('../models/doctor');


module.exports = {
    getAll: async (req, res) => {
        const patients = await Patient.find()
        const doctors = await Doctor.find();
        const prescriptions = await Prescription.find()

        res.render('dashboard/index', { patients: patients, doctors: doctors, prescriptions: prescriptions })
    }

};