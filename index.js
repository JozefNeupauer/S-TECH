async function sendMail() {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const messageElement = document.getElementById("message");

    const serviceID = 'service_mtshyuo'; // Replace with your actual service ID
    const templateID = 'template_10uu21i';
    var params = {    
        name: nameElement ? nameElement.value : "",       
        email: emailElement ? emailElement.value : "",
        message: messageElement ? messageElement.value : ""
    };

    try {
        await emailjs.send(serviceID, templateID, params);
        if (nameElement) nameElement.value = "";
        if (emailElement) emailElement.value = "";
        if (messageElement) messageElement.value = "";
        alert("Your message has been sent successfully!");
    } catch(err) {
        console.error(err);
    }
}