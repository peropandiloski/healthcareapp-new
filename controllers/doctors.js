const Doctor = require('../models/doctor');

module.exports = {
    getAll: async (req, res) => {
        const doctors = await Doctor.find();

        res.render('doctors/index', { doctors: doctors });
    },
    getOne: async (req, res) => {
        const doctor = await Doctor.findById(req.params.id)

        res.render('doctors/update', doctor)
    },
    create: (req, res) => {
        res.render('doctors/create');
    },
    postCreate: async (req, res) => {
        try {
            const doctor = new Doctor(req.body)
            await doctor.save()

            res.redirect('/doctors')
        } catch (error) {
            res.render('doctors/create', {
                ...req.body,
                error: error.message
            })
        }
    },
    postUpdate: async (req, res) => {
        try {
            await Doctor.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
            res.redirect('/doctors');
        } catch (error) {
            res.render('doctors/update', {
                ...req.body,
                _id: req.params.id,
                error: error.message
            })
        }
    },
    delete: async (req, res) => {
        // TODO: try catch
        await Doctor.findByIdAndRemove(req.params.id)

        res.send({
            error: false,
            message: `Doctor with id #${req.params.id} removed`
        });
    },
    patients: async (req, res) => {
        // assume try catch
        const doctor = await Doctor.findOne({ _id: req.params.id }).populate('patients');
        console.log(doctor);
        res.render('doctors/patients', { doctor });
    }
};