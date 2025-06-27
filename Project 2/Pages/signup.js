function checkSignIn() {
    var email = document.querySelector('input[type="email"]').value;//email input
    var password = document.querySelector('input[type="password"]').value;//password input
    var message = document.getElementById('sign-up-message');
    //incase fields are empty
    if (email == "" || password == "") {
        message.innerHTML = "Please fill in all fields.";//error message
        message.style.color = "red";
    } else {
        message.innerHTML = "Sign-in successful!";//confirmation message
        message.style.color = "green";
        setTimeout(() => {
            window.location.href = 'explore.html';//redirecting to explore page
        }, 2000)
        document.querySelector('form').reset();//clear form
    }
}

document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();//preventing default submission
    checkSignIn();//running the fuction
};