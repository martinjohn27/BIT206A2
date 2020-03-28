console.log("booking_contact.js is running.");



getFormElement();
//get form element
function getFormElement(){
    fullName_input = document.getElementById('inFullName');
    email_input = document.getElementById('inEmail');
    contactNo_input = document.getElementById('inContactNo');
}

var user = JSON.parse(localStorage.getItem('user'));

if (user.login === true){
    setValue();
}


function setValue(){
    fullName_input.value = user.name;
    email_input.value = user.email;
    contactNo_input.value = user.phone;
}

function submitContactForm(){
    localStorage.inFullName = fullName_input.value;
    localStorage.inEmail = email_input.value;
    localStorage.inContactNo = contactNo_input.value;
}


console.log("FullName: " + localStorage.inFullName);
console.log("Email: " + localStorage.inEmail);
console.log("ContactNo: " + localStorage.inContactNo);

