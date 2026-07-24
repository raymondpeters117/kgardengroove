// Initialize EmailJS
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY",
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";

    emailjs.sendForm(
        "service_ilaoqwb",
        "template_der0a5n",
        form
    )
    .then(() => {
        status.textContent = "✅ Message sent successfully!";
        form.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        status.textContent = "❌ Failed to send message.";
    });
});
