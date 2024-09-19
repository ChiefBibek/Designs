// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const alertForm = document.querySelector(".alerts-panel form");

  alertForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = document.getElementById("alert-location").value;
    const aqiThreshold = document.getElementById("aqi-threshold").value;
    const alertMethod = document.getElementById("alert-method").value;

    // Placeholder for alert creation logic
    alert(
      `Alert Set!\nLocation: ${location}\nAQI Threshold: ${aqiThreshold}\nMethod: ${alertMethod}`
    );

    // Reset the form
    alertForm.reset();
  });
});
