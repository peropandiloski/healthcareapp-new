const Patient = require('../models/patient');


module.exports = {
    getAll: async (req, res) => {
        const patients = await Patient.find().populate('doctor')
        // TODO : CHECK WHY DATA IS NOT SENT TO VIEW
        res.render('dashboard/index', { patients: patients })

    }

};