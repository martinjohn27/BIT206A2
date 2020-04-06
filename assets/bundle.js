const elements = {
  homeNavigation :document.getElementById("navigation1"),
  navigation : document.getElementById("navigation")
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-130px"
    :   elements.navigation.style.marginTop = "90px"; 
    $(".navigation img").addClass("big-image");
    $(".navigation span").addClass("visibility");
    $(".navigation span").hide();
    elements.navigation === null ? elements.homeNavigation.style.opacity = "0.9" 
    : elements.navigation.style.opacity = "0.9";
  } else {
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-190px"
    : elements.navigation.style.marginTop = "-50px";
    $(".navigation img").removeClass("big-image");
    $(".navigation span").removeClass("visibility");  
    $(".navigation span").show();
    elements.navigation === null ? elements.homeNavigation.style.opacity = "1"
    : elements.navigation.style.opacity = "1";
  }
}

//default setting when load page
$(".navigation span").removeClass("visibility");
$(".navigation img").removeClass("big-image");


//when user mouse over the nav bar
$(".navigation").mouseover(function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navigation span").show();
    $(".navigation span").removeClass("visibility");
    $("img").removeClass("big-image");
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-225px"
    : elements.navigation.style.marginTop = "-5px";
  }
});

//when user mouse out the nav bar

$(".navigation").mouseout(function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navigation span").hide();
    $(".navigation span").addClass("visibility");
    $(".navigation img").addClass("big-image");
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-130px"
    : elements.navigation.style.marginTop = "90px";
  }
});



//register form
$(document).ready(function(){

  

  $("#registerName").keyup(function(){
    if ($("#registerName").val().length < 3) {
        document.getElementById('registerName').style.border = "2px solid red";
    }else{
        document.getElementById('registerName').style.border = "2px solid green";
   }
});


$("#registerEmail").keyup(function(){
  if (!$("#registerEmail").val().includes("@")) {
      document.getElementById('registerEmail').style.border = "2px solid red";
  }else{
      document.getElementById('registerEmail').style.border = "2px solid green";
 }
});

$("#registerPhone").keyup(function(){
  if ($("#registerPhone").val().length < 3) {
      document.getElementById('registerPhone').style.border = "2px solid red";
  }else{
      document.getElementById('registerPhone').style.border = "2px solid green";
 }
});

$("#registerPsw").keyup(function(){
  if ($("#registerPsw").val().length < 3) {
      document.getElementById('registerPsw').style.border = "2px solid red";
  }else{
      document.getElementById('registerPsw').style.border = "2px solid green";
 }
});

  $("#retypePsw").keyup(function(){
       if ($("#registerPsw").val() !== $("#retypePsw").val()) {
           document.getElementById('retypePsw').style.border = "2px solid red";
           document.getElementById('validate-name').textContent = "Password do not match !"
           document.getElementById('registerBtn').style.marginTop = "20px";
       }else{
           document.getElementById('retypePsw').style.border = "2px solid green";
           document.getElementById('validate-name').textContent = "";
           document.getElementById('registerBtn').style.marginTop = "40px";
      }
  });
});



