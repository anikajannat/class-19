$(function () {
    'use strict'
 
    $(window).on('load', function () {
       $('#preloader').fadeOut(2000);
    })
    $(window).on('scroll', function () {
 
       var scrollSize = $(window).scrollTop();
 
       if (scrollSize > 500) {
          $('#backToTop').fadeIn(1000)
       } else {
          $('#backToTop').fadeOut(1000)
       }
    })
 
    $('#backToTop').on('click', function () {
       $('html, body').animate({
          scrollTop:0,
       },1000)
    })
 
 
 
 
 })