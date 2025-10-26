 const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        status.style.display = "block";
        form.reset();
      } else {
        status.textContent = "❌ Failed to send message. Try again!";
        status.style.color = "red";
        status.style.display = "block";
      }
    } catch (error) {
      status.textContent = "⚠️ Error sending message. Check your connection.";
      status.style.color = "red";
      status.style.display = "block";
    }
  });