const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: ['Full name is a required field']
    },

    city: {
        type: String,
        required: ['City is a required field']
    },
    age: {
        type: Number,
        required: ['Age is a required field']
    },
    gender: {
        type: String,
        required: ['Gender is a required field']
    },
    phone_number: {
        type: String,
        required: ['Phone number is a required field']
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    }
});

module.exports = mongoose.model('Patient', patientSchema);
