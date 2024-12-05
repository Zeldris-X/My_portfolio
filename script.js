console.log("js running")

function sendMail(event) {
    event.preventDefault();  // Prevent the form from submitting traditionally
    
    // Collect the form data
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Send the email using EmailJS
    emailjs.send("service_89dc5ds", "template_umtxhcp", params)
        .then(function(response) {
            // Handle success response
            alert("Email Sent Successfully!");
        })
        .catch(function(error) {
            // Handle error response
            alert("Error sending email: " + error);
        });
}
