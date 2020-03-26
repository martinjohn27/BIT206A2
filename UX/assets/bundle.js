const elements = {
  homeNavigation :document.getElementById("navigation1"),
  navigation : document.getElementById("navigation")
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-180px"
    :   elements.navigation.style.marginTop = "50px"; 
    $(".navigation img").addClass("big-image");
    $(".navigation span").addClass("visibility");
    $(".navigation span").hide();
    elements.navigation === null ? elements.homeNavigation.style.opacity = "0.9" 
    : elements.navigation.style.opacity = "0.9";
  } else {
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-220px"
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
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-300px"
    : elements.navigation.style.marginTop = "-10px";
  }
});

//when user mouse out the nav bar

$(".navigation").mouseout(function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navigation span").hide();
    $(".navigation span").addClass("visibility");
    $(".navigation img").addClass("big-image");
    elements.navigation === null ? elements.homeNavigation.style.marginTop = "-180px"
    : elements.navigation.style.marginTop = "50px";
  }
});
