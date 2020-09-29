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
                600:{
                    items: 3
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
                600:{
                    items: 3
                },
                1000:{
                    items: 5
                }
            }
        });


}) 