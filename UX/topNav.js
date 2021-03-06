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
           document.getElementById('registerForm').style.display='none';
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

var loginSuccess;
var user;

const signUp = () =>{
    user = {
        name : document.getElementById('registerName').value,
        email : document.getElementById('registerEmail').value,
        phone : document.getElementById('registerPhone').value,
        psw : document.getElementById('registerPsw').value,
        login : true
    };  
    localStorage.setItem('user', JSON.stringify(user));
}



const login = () => {
    const loginUser = {
        email: document.getElementById('loginEmail').value,
        psw : document.getElementById('loginPsw').value
    }

    if (loginUser.email === user.email & loginUser.psw === user.psw){
        alert("login")
        user.login = true;
        localStorage.setItem('user', JSON.stringify(user));
    } 
    else {
        if (loginUser.email != user.email){
            alert("Email that you input does not registered an account yet");
        } else if (loginUser.psw != user.psw){
            alert("Password is incorrect. Please try again !");
        }
    }
}

const logOut = () => {
    user.login = false;
    localStorage.setItem('user', JSON.stringify(user));
    alert("Thank you for using our website :)")

    if (user.login === false) {
        document.getElementById('btnLogin').style.display = 'block';
        document.querySelector('.userDropdown').removeChild;
        location.reload();
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

window.addEventListener('load',() => {
    user = JSON.parse(localStorage.getItem('user'));

    const markup = 
        `<button class="btn btn-secondary btn_user dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-user"></i>&nbsp; ${user.name}
        </button>
        <div class="user-dropdown-content" aria-labelledby="dropdownMenuButton">
            <a style="text-decoration: none;,color: #0086b3; " class="" href="#" onclick="logOut()">Logout</a>
        </div>`;

    const markupNav = `<a href="booking_view.html" id="btnViewBooking" class="nav-link text-uppercase">My Booking</a>`;

    const markupSideNav = `<a href="booking_view.html">My Booking</a>`;

    const markupSideNav2 = `<a href="#" onclick="logOut()">Logout</a>`;

    if (user.login === true){
        //hide element after login
        document.getElementById('btnLogin').style.display = 'none';

        //sideNav
        document.getElementById('btnLoginSideNav').style.display = 'none';
        

        //show element after login
        document.querySelector('.user-myBooking').insertAdjacentHTML("afterbegin", markupNav);
        document.querySelector('.userDropdown').insertAdjacentHTML("afterbegin", markup);

        //sideNav
        document.querySelector('.myBookingSideNav').insertAdjacentHTML("afterbegin",markupSideNav);
        document.querySelector('.logoutSideNav').insertAdjacentHTML("afterbegin", markupSideNav2);
        

    }
});

