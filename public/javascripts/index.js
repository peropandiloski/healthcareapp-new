
function deleteDoctor(id) {
    fetch(`http://localhost:3000/doctors/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.error) {
                location.reload();
            }
        })
        .catch(err => {
            console.log('Error during deleting a Doctor: ', err);
        });
}

function deletePatient(id) {
    fetch(`http://localhost:3000/patients/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.error) {
                location.reload();
            }
        })
        .catch(err => {
            console.log('Error during delete a Patient: ', err);
        });
}
function deletePrescription(id) {
    fetch(`http://localhost:3000/prescription/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.error) {
                location.reload();
            }
        })
        .catch(err => {
            console.log('Error during delete a Prescription: ', err);
        });
}

$(document).ready(function () {
    $('.select-doctor').select2({
        placeholder: 'Choose a doctor',
        allowClear: true
    });
});

$(document).ready(function () {
    $('.select-patient').select2({
        placeholder: 'Choose a patient',
        allowClear: true
    });
});

