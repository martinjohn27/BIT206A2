

//filter out application that match the current applicant ID
var allBooking = JSON.parse(localStorage.bookingList);
var viewbBookingList = new Array;
for (var i = 0; i < allBooking.length; i++) {
//   if(allBooking[i].username.toString() == currentUser.username.toString()){
//     viewbBookingList.push(allBooking[i]);
//   }
    viewbBookingList.push(allBooking[i]);
}


var table = document.getElementById("bookingTable").getElementsByTagName("tbody")[0];

function populateTable(){
    console.log(viewbBookingList);
    for (var i = 0; i < viewbBookingList.length; i++) {
        insertRowToTable(i);
    }
    //insert white space to the bottom of table
    //table.insertRow(table.length).insertCell(0).innerHTML = `<br><br><br>`;
    
}

function insertRowToTable(i){
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);

    cell1.innerHTML = viewbBookingList[i].bookingID;
    cell1.style.color = "#0086b3";
    cell1.style.fontWeight ="bold";
    cell2.innerHTML = viewbBookingList[i].service;
    cell3.innerHTML = viewbBookingList[i].petName;
    cell4.innerHTML = viewbBookingList[i].petType;
    cell5.innerHTML = viewbBookingList[i].bookingTime;
    cell6.innerHTML = viewbBookingList[i].bookingDate;
    cell7.innerHTML = viewbBookingList[i].checkInDate;
    cell8.innerHTML = viewbBookingList[i].checkOutDate;
    cell9.innerHTML = viewbBookingList[i].remarks;





 

}