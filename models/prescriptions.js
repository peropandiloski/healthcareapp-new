const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({
    description: {
        type: 'string',
        required: ['Description is a required field']
    },
    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
