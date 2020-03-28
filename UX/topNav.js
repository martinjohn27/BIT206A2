function toggleNav() {
    var nav = document.getElementById("mySidenav");
    if(nav.style.width == "250px"){
        nav.style.width = "0";
    }
    else{
        nav.style.width == "250px";
    }
    //document.getElementById("sidenavBtnOpen").style.visibility = "hidden";
    //document.getElementById("sidenavBtnClose").style.visibility = "initial";
}

function openNav(){
    var nav = document.getElementById("mySidenav");
    nav.style.width = "250px";
}

function closeNav() {
    var nav = document.getElementById("mySidenav");
    nav.style.width = "0";
    nav.style.color ="#0086b3";
    
    //document.getElementById("sidenavBtnOpen").style.visibility = "initial";
    //document.getElementById("sidenavBtnClose").style.visibility = "hidden";

}

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 12 ) {
            $('.nav_bar').addClass('active');
        } else {
            $('.nav_bar').removeClass('active');
        }
    });
  })
  console.log('hi');


  //login form 

  function displayForm(form){
    switch(form){
       case 'login':
           document.getElementById('loginForm').style.display='block';
           break;
       case 'register':
           document.getElementById('loginForm').style.display='none';
           document.getElementById('registerForm').style.display='block';
           break;

    }
    
}

function cancelForm(form){

    switch(form){
        case 'login':
            document.getElementById('loginForm').style.display='none';
            break;
        case 'register':
            document.getElementById('registerForm').style.display='none';
            break;    
    }

}

//when the user clicks anywhere outside of the form, close it
window.onclick = function(event){
    if(event.target == loginForm){
        document.getElementById('loginForm').style.display = "none";
    }
    else if (event.target == registerForm){
        document.getElementById('registerForm').style.display='none';
    }
}