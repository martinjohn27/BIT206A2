
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navigation").style.marginTop = "20px";
    $(".navigation img").addClass("big-image");
    $(".navigation span").addClass("visibility");
    $(".navigation span").hide();
    
  } else {
    document.getElementById("navigation").style.marginTop = "-50px";
    $(".navigation img").removeClass("big-image");
    $(".navigation span").removeClass("visibility");  
    $(".navigation span").show();
  }
}

//default setting when load page
$(".navigation span").removeClass("visibility");
$(".navigation img").removeClass("big-image");


//when user mouse over the nav bar
$(".navigation").mouseover(function(){
  $(".navigation span").show();
  $(".navigation span").removeClass("visibility");
  $("img").removeClass("big-image");
});

//when user mouse out the nav bar

$(".navigation").mouseout(function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".navigation span").hide();
    $(".navigation span").addClass("visibility");
    $(".navigation img").addClass("big-image");
  }
});
