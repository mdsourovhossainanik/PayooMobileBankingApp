   console.log("script connected ")
document.getElementById("login-btn").addEventListener("click", function (event) {

    event.preventDefault();

    const mobileNumber = "01309429057";
    const pinNumber = "1234";

    const mobileNumberValue = document.getElementById("mobileNumber").value;
    const pinNumberValue = document.getElementById("pinNumber").value;

    if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
         window.location.href="./home.html"
    } else {
        alert("Invalid Mobile Number or PIN");
    }

});