console.log("booking_time.js is running");


getFormElement();
//get form element
function getFormElement(){
    service_input = document.getElementById('inputService');
    bookingTime_input = document.getElementById('inTime');
    bookingTime_label = document.getElementById('labelTime');

    bookingDate_input = document.getElementById('inDate');
    bookingDate_label = document.getElementById('labelDate');

    checkInDate_input = document.getElementById('inCheckInDate');
    checkInDate_label = document.getElementById('labelCheckInDate');


    checkOutDate_input = document.getElementById('inCheckOutDate');
    checkOutDate_label = document.getElementById('labelCheckOutDate');

    petName_input = document.getElementById('inPetName');

    petType_input = document.getElementById('inPetType');

    remarks_textarea = document.getElementById('inRemarks');

    errorMsg_small = document.getElementById('errorMsg');

    
    
}

//set value to input service
service_input.setAttribute("readonly", null);
service_input.value = localStorage.selectedService;

errorMsg_small.style.display = 'none';


//hide element if service is not pet hotel
if (localStorage.selectedService !="Pet Hotel"){
    checkInDate_input.style.display = 'none';
    checkOutDate_input.style.display = 'none';
    checkOutDate_label.style.display = 'none';
    checkInDate_label.style.display = 'none';
    bookingDate_input.setAttribute("required", null);
    bookingTime_input.setAttribute("required", null);

}



//if user select pet hotel service
setupPetHotel();
function setupPetHotel(){
    if (localStorage.selectedService == "Pet Hotel"){
        bookingDate_input.style.display = 'none';
        bookingDate_label.style.display = 'none';
        bookingTime_input.style.display = 'none';
        bookingTime_label.style.display = 'none';



        checkInDate_input.style.display = 'initial';
        checkOutDate_input.style.display = 'initial';
        checkOutDate_label.style.display = 'initial';
        checkInDate_label.style.display = 'initial';
        checkOutDate_input.setAttribute("required", null);
        checkInDate_input.setAttribute("required", null);


    }
} 

//get data from localstorage
getBookFormData();
function getBookFormData(){
    console.log("Service: " + localStorage.inService);
    console.log("Pet Name: " + localStorage.inPetName);
    console.log("Pet Type: " +  localStorage.inPetType);
    console.log("Booking Time: " + localStorage.inBookingTime);
    console.log("Booking Date: " + localStorage.inBookingDate);
    console.log("Check In: " + localStorage.inCheckInDate);
    console.log("Check Out: " + localStorage.inCheckOutDate);
    console.log("Remarks: " + localStorage.inRemarks);

    
}

//onsubmit function after form submitted
function submitBookForm(){

        localStorage.inService = service_input.value;
        localStorage.inPetName = petName_input.value;
        localStorage.inPetType = petType_input.value;
        localStorage.inBookingTime = bookingTime_input.value;
        localStorage.inBookingDate = bookingDate_input.value;
        localStorage.inCheckInDate = checkInDate_input.value;
        localStorage.inCheckOutDate = checkOutDate_input.value;
        localStorage.inRemarks = remarks_textarea.value;
    // if(checkInDate_input.value > checkOutDate_input.value){
    //     errorMsg_small.style.display = 'initial';

    // }
    // else
    // {
    //     localStorage.inService = service_input.value;
    //     localStorage.inPetName = petName_input.value;
    //     localStorage.inPetType = petType_input.value;
    //     localStorage.inBookingTime = bookingTime_input.value;
    //     localStorage.inBookingDate = bookingDate_input.value;
    //     localStorage.inCheckInDate = checkInDate_input.value;
    //     localStorage.inCheckOutDate = checkOutDate_input.value;
    //     localStorage.inRemarks = remarks_textarea.value;
    //     
    // }
   
    
    
}


