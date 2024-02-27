// app.js
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const fullName = document.querySelector('input[placeholder="Full Name"]').value;
        const collegeName = document.querySelector('input[placeholder="College Name"]').value;
        const department = document.querySelector('input[placeholder="Department"]').value;
        const year = document.querySelector('input[placeholder="Year"]').value;
        const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
        const emailAddress = document.querySelector('input[placeholder="E-Mail Address"]').value;

        // Save data to Firebase
        const db = firebase.firestore();
        db.collection('hackathonRegistrations').add({
            fullName: fullName,
            collegeName: collegeName,
            department: department,
            year: year,
            mobileNumber: mobileNumber,
            emailAddress: emailAddress
        })
        .then(function(docRef) {
            console.log('Registration successful with ID: ', docRef.id);
            // Optionally, display a success message or redirect to a thank you page
        })
        .catch(function(error) {
            console.error('Error registering: ', error);
        });
    });
});
