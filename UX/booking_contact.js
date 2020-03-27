console.log("booking_contact.js is running.");

localStorage.userFullName = "Edison";
localStorage.userEmail = "Edison@gmail.com";
localStorage.userContact = "01234567890";


getFormElement();
//get form element
function getFormElement(){
    fullName_input = document.getElementById('inFullName');
    email_input = document.getElementById('inEmail');
    contactNo_input = document.getElementById('inContactNo');
}

setValue();

function setValue(){
    fullName_input.value = localStorage.userFullName;
    email_input.value = localStorage.userEmail;
    contactNo_input.value = localStorage.userContact;
}

function submitContactForm(){
    localStorage.inFullName = fullName_input.value;
    localStorage.inEmail = email_input.value;
    localStorage.inContactNo = contactNo_input.value;
}


console.log("FullName: " + localStorage.inFullName);
console.log("Email: " + localStorage.inEmail);
console.log("ContactNo: " + localStorage.inContactNo);

