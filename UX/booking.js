console.log("booking.js is running");


//user selectedSerive
function selectedService(service){
    if (service=="s1"){
        localStorage.selectedService = "Pet Grooming";
        console.log(localStorage.selectedService);
        window.location.href = "booking_time.html";
        
    }

    if(service=="s2"){
       
        localStorage.selectedService = "Pet Spa";
        console.log(localStorage.selectedService);
        window.location.href = "booking_time.html";
        
    }

    if(service=="s3"){
        localStorage.selectedService = "Pet Hotel";
        console.log(localStorage.selectedService);
        window.location.href = "booking_time.html";
        
        
    }

    if(service=="s4"){
        console.log(localStorage.selectedService);
        localStorage.selectedService = "Swimming Pool";
        window.location.href = "booking_time.html";
        
    }

    if(service=="s5"){
        localStorage.selectedService = "Indoor Park";
        console.log(localStorage.selectedService);
        window.location.href = "booking_time.html";
        
    }

    if(service=="s6"){
        localStorage.selectedService = "Pet Walking";
        console.log(localStorage.selectedService);
        window.location.href = "booking_time.html";
        
    }
}

