
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.marginTop = "-150px";
    $(".navigation img").addClass("big-image");
    $(".navigation span").addClass("visibility");
    $(".navigation span").hide();
    document.getElementById("navigation").style.opacity = "0.9";
    
  } else {
    document.getElementById("navigation").style.marginTop = "-200px";
    $(".navigation img").removeClass("big-image");
    $(".navigation span").removeClass("visibility");  
    $(".navigation span").show();
    document.getElementById("navigation").style.opacity = "1";
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
    document.getElementById("navigation").style.marginTop = "-4px";
  }
});

//when user mouse out the nav bar

$(".navigation").mouseout(function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navigation span").hide();
    $(".navigation span").addClass("visibility");
    $(".navigation img").addClass("big-image");
    document.getElementById("navigation").style.marginTop = "-150px";
  }
});
