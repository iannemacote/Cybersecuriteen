document.addEventListener("DOMContentLoaded", function () {
    function checkPhishing(isPhishing) {
        let feedback = document.getElementById("feedback");

        if (!feedback) {
            console.error("Element with ID 'feedback' not found!");
            return;
        }

        if (isPhishing) {
            feedback.innerHTML = "✅ Correct! This email is a phishing attempt. <br> 🔹 The sender's email looks suspicious. <br> 🔹 The link could lead to a fake website. <br> 🔹 The email creates urgency to trick you.";
            feedback.style.color = "green";
        } else {
            feedback.innerHTML = "❌ Incorrect! This is a phishing email. <br> Always check sender addresses and avoid clicking unknown links.";
            feedback.style.color = "red";
        }
    }

    // Attach event listeners to buttons
    let reportButton = document.getElementById("report-phishing");
    let trustButton = document.getElementById("trust-email");

    if (reportButton && trustButton) {
        reportButton.addEventListener("click", function () { checkPhishing(true); });
        trustButton.addEventListener("click", function () { checkPhishing(false); });
    } else {
        console.error("Buttons not found! Check your HTML IDs.");
    }
});
