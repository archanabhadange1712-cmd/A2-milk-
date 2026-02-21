// Redirect to registration page
window.openRegistration = function(){
    window.location.href = "registration.html";
}


let generatedOTP = "";

// Send OTP
function sendOTP(){

    const mobile = document.getElementById("mobile").value;

    if(mobile.length != 10){
        alert("Enter valid mobile number");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    alert("Demo OTP is: " + generatedOTP);

    document.getElementById("otp").disabled = false;
}


// Verify OTP
function verifyOTP(){

    const enteredOTP = document.getElementById("otp").value;

    if(enteredOTP !== generatedOTP){
        alert("Invalid OTP");
        return;
    }

    // Collect form data
    const customer = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        aadhaar: document.getElementById("aadhaar").value,
        pan: document.getElementById("pan").value,
        date: new Date().toLocaleString()
    };

    // Get existing customers
    let customers = JSON.parse(localStorage.getItem("customers")) || [];

    // Add new customer
    customers.push(customer);

    // Save back to localStorage
    localStorage.setItem("customers", JSON.stringify(customers));

    // Show success message
    document.getElementById("successMsg").style.display = "block";

    // Redirect
    setTimeout(function(){
        window.location.href = "index.html";
    }, 2000);
}

let customers = JSON.parse(localStorage.getItem("customers")) || [];

let table = document.getElementById("customerTable");

customers.forEach(function(customer){

    let row = table.insertRow();

    row.insertCell(0).innerText = customer.name;
    row.insertCell(1).innerText = customer.mobile;
    row.insertCell(2).innerText = customer.email;
    row.insertCell(3).innerText = customer.address;

});
