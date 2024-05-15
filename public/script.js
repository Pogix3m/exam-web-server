document.getElementById("increment-btn").addEventListener("click", () => {
    fetch("/increment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ increment: 1 })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("count").textContent = data.newCount;
        })
        .catch(error => console.error("Error:", error));
});

// Get the current count on page load
fetch("/count")
    .then(response => response.json())
    .then(data => {
        document.getElementById("count").textContent = data.count;
    })
    .catch(error => console.error("Error:", error));
