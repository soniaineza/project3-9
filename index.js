function myfunction(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");

    let message = "";

    if (email === "") {
        message = "Please enter an email.";
        msgbox.style.color = "red";
    } else if (pass === "") {
        message = "Please enter a password.";
        msgbox.style.color = "red";
    } else if (age === "") {
        message = "Please enter your age.";
        msgbox.style.color = "red";
    } else {
        message = "Login successful";
        msgbox.style.color = "green";
    }

    msgbox.innerText = message;
}
