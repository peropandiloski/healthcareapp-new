const Prescription = require('../models/prescriptions');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');


module.exports = {
    getAll: async (req, res) => {
        const prescription = await Prescription.find().populate('doctor').populate('patient')
        const doctor = await Doctor.find()
        const patient = await Patient.find()
        res.render("prescriptions/index", { doctors: doctor, patients: patient, prescriptions: prescription })

    },

    getOne: async (req, res) => {
        const doctor = await Doctor.find()
        const patient = await Patient.find()
        const prescription = await Prescription.find()
        res.render("prescriptions/create", { doctors: doctor, patients: patient, prescriptions: prescription })
    },

    create: async (req, res) => {
        const doctor = await Doctor.find()
        const patient = await Patient.find()
        const prescription = await Prescription.findById(req.params.id)
        res.render("prescriptions/update", { doctors: doctor, patients: patient, prescriptions: prescription })
    },

    postCreate: async (req, res) => {
        try {

            const prescription = new Prescription(req.body)
            await prescription.save()

            res.redirect('/prescription')
        }
        catch (err) {
            res.render('prescriptions/create', {
                ...req.body,
                error: err.message
            })
        }
    },
    postUpdate: async (req, res) => {
        try {
            await Prescription.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
            res.redirect('/prescription')
        } catch (error) {
            res.render('prescriptions/update', {
                ...req.body,
                _id: req.params.id,
                error: error.message
            })
        }
    },

    delete: async (req, res) => {
        await Prescription.findByIdAndRemove(req.params.id)

        res.send({
            error: false,
            message: `Prescription with id #${req.params.id} removed`
        });
    }


}
