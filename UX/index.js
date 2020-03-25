$(function(){
    var state = 0;
    var comments = ["#comment1", "#comment2", "#comment3", "#comment4"];
    var winWidth = $(window).width();
    $(window).resize(function(){
        winWidth = $(window).width();
        $('.comments,.container-comment').width(winWidth-100);
        $('.container_element').scrollLeft((winWidth-100)*state);
    }).trigger('resize');
    $('#lefty').click(function(){
        if (state==0) {
        state = maxState;
        } else {
        state--;
        }
        $('.container-comment').animate({scrollLeft:((winWidth-100)*state)+'px'}, 800);
    });
    $('#righty').click(function(){
        $("#comment1").addClass("comment-none")
        $('.container-comment').animate({scrollLeft:((winWidth-100)*state)+'px'}, 800);
    });
});