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
    saveBooking();

}


console.log("FullName: " + localStorage.inFullName);
console.log("Email: " + localStorage.inEmail);
console.log("ContactNo: " + localStorage.inContactNo);


function saveBooking(){
    var fullname = localStorage.inFullName;
    var email = localStorage.inEmail;
    var contactNo = localStorage.inContactNo;
    var service = localStorage.inService; 
    var petName = localStorage.inPetName;
    var petType = localStorage.inPetType;
    var bookingTime = localStorage.inBookingTime;
    var bookingDate = localStorage.inBookingDate;
    var checkInDate = localStorage.inCheckInDate;
    var checkOutDate = localStorage.inCheckOutDate;
    var remarks = localStorage.inRemarks;

    if(bookingDate == "" && bookingTime == ""){
        bookingDate = ' - '; 
        bookingTime = ' - ';
         // var newBooking = {'fullName': fullname, 'email': email, 'contactNo': contactNo, 'service': service, 'petName': petName, 'petType': petType, 
        //     'bookingTime': bookingTime, 'bookingDate': bookingDate, 'checkInDate': checkInDate, 'checkOutDate': checkOutDate,
        //     'remarks': remarks
        // };
    }
    else if (checkInDate == "" && checkOutDate == ""){
        checkInDate = ' - ';
        checkOutDate = ' - ';
       
        
    }

    var newBooking = {fullName: fullname, email: email, contactNo: contactNo, service: service, petName: petName, petType: petType, 
        bookingTime: bookingTime, bookingDate: bookingDate, checkInDate: checkInDate, checkOutDate: checkOutDate,
        remarks: remarks
    };
    localStorage.newBooking = JSON.stringify(newBooking);

    
    

}

console.log(localStorage.newBooking);

