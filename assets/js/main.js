(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".toggle-btn").click(function(){
            $(".nav").toggleClass("active")
        });
        $(".toggle-btn").click(function(){
            $(".toggle-btn").toggleClass("style")
        })
        // Owl-carousel
        $('.hero-carousel').owlCarousel({
            items:1,
            loop:true,
            autoplay:false
        })

        // responsive menu
        $('#main-nav').hcMobileNav();
        
        

    });
 
}(jQuery));	