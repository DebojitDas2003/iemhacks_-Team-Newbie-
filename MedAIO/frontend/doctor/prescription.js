document.addEventListener('DOMContentLoaded', function() {
    const prescriptionForm = document.getElementById('prescriptionForm');
    const prescriptionOutput = document.getElementById('prescriptionOutput');
    
    prescriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const patientName = document.getElementById('patientName').value;
        const medications = document.getElementById('medications').value;
        
        const prescription = generatePrescription(patientName, medications);
        prescriptionOutput.innerHTML = prescription;
    });
    
    function generatePrescription(patientName, medications) {
        return `
            <div class="prescription">
                <h2>Prescription for ${patientName}</h2>
                <h3>Medications:</h3>
                <p>${medications}</p>
            </div>
        `;
    }
});
