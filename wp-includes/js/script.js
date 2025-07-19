function sendEmail() {
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_aaq7c88', 'template_5iwcesf', params).then(alert('Message Sent Successfully!!!'));
}
