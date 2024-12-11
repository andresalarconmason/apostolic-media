function handleSubmit(event) {
    event.preventDefault();
    const formSection = document.getElementById("commission");
    formSection.innerHTML = "<h3>Thank you for your submission!</h3> <p>We will contact you soon.</p>"
}