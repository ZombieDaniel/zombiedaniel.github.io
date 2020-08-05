$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.carousel').carousel({
        indicators: true,
        dist: 0,
        shift: 20,
        numVisible: 5,
    });

    $('.next1').click(function(){
        $('.carousel1').carousel('next');
    });

    $('.prev1').click(function(){
        $('.carousel1').carousel('prev');
    });

    $('.next2').click(function(){
        $('.carousel2').carousel('next');
    });

    $('.prev2').click(function(){
        $('.carousel2').carousel('prev');
    });
});
