function validate(e) {
    e.preventDefault();

    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const msgBox= document.getElementById("message");

    let message = "";

    if (email === "") {
        message="Please enter a valid email";
        msgBox.style.color = "red";
    } else if (password === "") {
        message="Please enter a valid password";
        msgBox.style.color = "red";
    } else {
        alert("Logged In");
        message="Logged In";
        msgBox.style.color = "green";
    }

    msgBox.innerText = message;

}