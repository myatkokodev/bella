$(document).ready(function() {

        //for navigation bar

        let navbar = $('.bl-navbar');
        let noticebar = $('.bl-notice-bar')

        $(window).scroll(function(){
       
             let oTop = window.innerHeight - $('#bl-main #banner-area').offset().top;
             let sT = $(window).scrollTop();
           if($(window).scrollTop() > oTop){
               navbar.addClass('shadow');
               noticebar.slideUp('slow');
           }else{
               navbar.removeClass('shadow');
               noticebar.slideDown('slow');
           }
       
        });
       
    
    
        //top sale owl carousel
        $('#new-arrivals .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items: 1
                },
                400:{
                    items: 2
                },
                600:{
                    items: 3
                },
                900:{
                    items: 4
                },
                1000:{
                    items: 5
                }
            }
        });

        //selling fast owl carousel
        $('#selling-fast .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items: 1
                },
                400:{
                    items: 2
                },
                600:{
                    items: 3
                },
                900:{
                    items: 4
                },
                1000:{
                    items: 5
                }
            }
        });


        var navBtn = $('.bl-nav-btn-res');
        navBtn.click(function () {
            
            var navitems = $('.bl-navbar-items-res');
            if(navitems.css(left: "-250px")) {
                navitems.css(left: "0");
            }else {
                navitems.css("left", "-250px");
            }

        });

        // navBtn.on('click', function() {

        //     if(navitems.css('display', 'flex')){
        //         navitems.css('display', 'none');
        //     }

        // });

});