$(function(){
    var state = 0;
    var comments = ["#comment1", "#comment2", "#comment3", "#comment4"];
    var winWidth = $(window).width();
    

    $(window).resize(function(){
         commentButton();
         serviceMobileView();
    })
    $(window).load(function(){
         commentButton();
         serviceMobileView();
    })

    const serviceMobileView = () => {
        if ($(window).width()<768){
            $('.services .col-xs-12').removeClass('row');
        } 
        else{
            $('.services .col-xs-12').addClass('row');
        }
    }

    const commentButton = () => {
        if (winWidth <= 768){
            state === 0 ? document.getElementById("lefty").style.display = "none" :document.getElementById("lefty").style.display = "initial";
            $('#lefty').click(function(){
                $(comments[state]).addClass("comment-none");
                $(comments[state-1]).removeClass("comment-none");
                state -=1   
                state === 0 ? document.getElementById("lefty").style.display = "none" :document.getElementById("lefty").style.display = "initial";
                state === 3 ? document.getElementById("righty").style.display = "none" :document.getElementById("righty").style.display = "initial";
                console.log(state);
            });
            $('#righty').click(function(){
                $(comments[state]).addClass("comment-none");
                $(comments[state+1]).removeClass("comment-none");
                state +=1 
                state === 3 ? document.getElementById("righty").style.display = "none" :document.getElementById("righty").style.display = "initial";
                state === 0 ? document.getElementById("lefty").style.display = "none" :document.getElementById("lefty").style.display = "initial"; 
                console.log(state);
            });
        } 
    }
    
});