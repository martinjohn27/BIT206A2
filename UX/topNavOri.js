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
