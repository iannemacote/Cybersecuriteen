document.addEventListener("DOMContentLoaded", function () {
    function checkPhishing(isPhishing) {
        let feedback = document.getElementById("feedback");

        if (!feedback) {
            console.error("Element with ID 'feedback' not found!");
            return;
        }

        if (isPhishing) {
            feedback.innerHTML = "✅ Correct! This email is a phishing attempt. <br> 🔹 Suspicious sender address <br> 🔹 Urgent action request <br> 🔹 Fake link";
            feedback.style.color = "green";
            feedback.style.animation = "fadeIn 1s";
        } else {
            feedback.innerHTML = "❌ Incorrect! This is a phishing email. Be cautious of urgent requests.";
            feedback.style.color = "red";
            feedback.style.animation = "fadeIn 1s";
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
