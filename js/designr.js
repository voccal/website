$('#skills').waypoint(function(){$('.chart').each(function(){$(this).easyPieChart({size:170,animate:2000,lineCap:'butt',scaleColor:false,barColor:'rgb(46, 174, 240)',trackColor: false,lineWidth:10});});},{offset:'80%'});$(window).resize(function(){$('.jumbotron').height($(window).height());$('.message-box').css({'marginTop':$(window).height()*0.4});scrollSpyRefresh();waypointsRefresh();});$('.no-csstransitions .hover-mask').hover(function(){$(this).stop(true,true).animate({opacity:1});},function(){$(this).stop(true,true).animate({opacity:0});});$('.scrollimation').waypoint(function(){$(this).toggleClass('in');},{offset:'90%'});function scrollSpyRefresh(){setTimeout(function(){$('body').scrollspy('refresh');},1000);}
function waypointsRefresh(){setTimeout(function(){$.waypoints('refresh');},1000);}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


