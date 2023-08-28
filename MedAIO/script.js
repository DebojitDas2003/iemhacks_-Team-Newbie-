document.addEventListener("DOMContentLoaded", function () {
  // redirecting to doctor page
  const doctor = document.getElementById("doctor");
  doctor.addEventListener("click", function () {
    window.location.href = "frontend/doctor/login.html";
  });

  // redirecting to patient page
  const patient = document.getElementById("patient");
  patient.addEventListener("click", function () {
    window.location.href = "frontend/patient/loginpage.html";
  });

  //redirecting to pharmacy page
  const pharmacy = document.getElementById("pharmacy");
  pharmacy.addEventListener("click", function () {
    window.location.href = "frontend/pharmacy/loginpage.html";
  });
});
