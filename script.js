// Map Interaction (Simulating Layers)
function toggleLayer(layer) {
  alert(`Displaying ${layer.toUpperCase()} data layer`);
}

// Sample Chart using Chart.js
const ctx = document.getElementById("airQualityChart").getContext("2d");
const airQualityChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "AQI Levels (Dummy Data)",
        data: [50, 55, 60, 70, 80, 90, 100],
        borderColor: "#85C124",
        backgroundColor: "rgba(133, 193, 36, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#666",
          stepSize: 20,
        },
      },
      x: {
        ticks: {
          color: "#666",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
  },
});

// Comparison Functionality
document.getElementById("compare-btn").addEventListener("click", () => {
  const city1 = document.getElementById("city1").value;
  const city2 = document.getElementById("city2").value;
  alert(`Comparing air quality for ${city1} and ${city2}`);
});

// Download Report (Dummy)
document.getElementById("download-report").addEventListener("click", () => {
  alert("Report downloaded (dummy action)");
});
