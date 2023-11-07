fetch(
  "https://4qj393ie8e.execute-api.us-east-1.amazonaws.com/v1/get-visiter-number"
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("visitor-count").textContent = data.count;
  });
