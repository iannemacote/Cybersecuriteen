// JavaScript source code
function checkPhishing(isPhishing) {
    let feedback = document.getElementById("feedback");

    if (isPhishing) {
        feedback.innerHTML = "✅ Correct! This email is a phishing attempt. <br> 🔹 The sender's email looks suspicious. <br> 🔹 The link could lead to a fake website. <br> 🔹 The email creates urgency to trick you.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Incorrect! This is a phishing email. <br> Always check sender addresses and avoid clicking unknown links.";
        feedback.style.color = "red";
    }
}
