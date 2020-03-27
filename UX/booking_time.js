console.log("booking_time.js is running");
function getFormElement(){
    service_input = document.getElementById('inputService');
    bookingTime_input = document.getElementById('inTime');
    bookingDate_input = document.getElementById('inDate');
    bookingDate_label = document.getElementById('labelDate');

    
    
}

//set value to input service
getFormElement();
service_input.setAttribute("readonly", null);
service_input.value = localStorage.selectedService;

setupPetHotel();

function setupPetHotel(){
    if (localStorage.selectedService == "Pet Hotel"){
        bookingDate_input.style.display = 'none';
        bookingDate_label.style.display = 'none';
    }
}   