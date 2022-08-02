function sendEmail() {
    // var name = document.getElementById("name");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    Email.send({
        Host: "smtp.gmail.com",
        Username : email,
        Password : password,
        To : 's.m.hadi.naghavi@gmail.com',
        From : email,
        Subject : subject,
        Body : message,
    });
    alert("The email sent succesfully.")
}