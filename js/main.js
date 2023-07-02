function formValidation(e) {
    e.preventDefault()
    console.log("Submitting..");
    console.log(e);
    // let form_values = document.forms["registration"]["FirstName"].value;
    let FirstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email ").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let Position = document.getElementById("Position").value;
    console.log(FirstName, lastName, email, address);
    localStorage.setItem("FirstName", FirstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("Position", Position);
    console.log("Submitted");
    window.alert(`you have successfully applied for ${Position}`);
}

function set_form() {
    console.log("get item");
    document.getElementById("FirstName").value = localStorage.getItem("FirstName")
    document.getElementById("lastName").value = localStorage.getItem("lastName")
    document.getElementById("email").value = localStorage.getItem("email")
    document.getElementById("phone").value = localStorage.getItem("phone")
    document.getElementById("address").value = localStorage.getItem("address")
    document.getElementById("city").value = localStorage.getItem("city")
    document.getElementById("Position").value = localStorage.getItem("Position")
}