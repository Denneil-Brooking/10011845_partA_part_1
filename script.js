//vars to be called on globaly
let user = document.querySelector("#user");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");


//Function to check & update user on Password
let ValidatePassword = () => {
    if (pass1.value == pass2.value && pass1.value.length > 5) {
        document.getElementById("pNotice").style.color = "blue";
        document.getElementById("pNotice").innerHTML = "Passwords match";
    } else {
        document.getElementById("pNotice").style.color = "red";
        document.getElementById("pNotice").innerHTML = "Please make sure your passwords match" + "\n" + "Password should be atless 6 characters";
    }
}
//Function to check & update user on Username
let ValidateUsername = () => {
    if (user.value.length > 7) {
        document.getElementById("uNotice").style.color = "blue";
        document.getElementById("uNotice").innerHTML = "Username pass";
    } else {
        document.getElementById("uNotice").style.color = "red";
        document.getElementById("uNotice").innerHTML = "Username should have atless 8 character";
    }
}
//Function to prompt Success or failiar on submit
let print = () => {
    if (user.value.length > 7 && pass1.value == pass2.value && pass1.value.length > 5) {
        document.getElementById("message").innerHTML = "Username and password has been set";
        console.log("Username: " + user.value + "  " + "Password: " + pass1.value + "  " + "Confirmed Password: " + pass2.value)
        alert("Username and password has been set, Thank you");
    } else {

        alert("Failed to set username & password please check your information and try again");
    }
}
submit.addEventListener('click', (e) => {
    print();
    e.preventDefault()
})