window.addEventListener('load', function () {
    'use strict'; 

    var toggler = document.querySelector('.toggler'),
        menu = document.querySelector('.menu-off-canvas'),
        overlay = document.querySelector('.overlay'),
        link = menu.querySelectorAll('ul>li>a');
        
    
    toggler.onclick = function(e){
        e.preventDefault();
        menu.classList.remove('menu-off-canvas--inactive');
        overlay.classList.add('overlay--active');
        
        if (overlay.classList.contains('overlay--active')) {
            document.body.style.overflow = "hidden";
        }
    };
    
    overlay.onclick = function () {
        overlay.classList.remove('overlay--active');
        menu.classList.add('menu-off-canvas--inactive');
        
        if (overlay) {
            document.body.style.overflow = "";
        }
    };
    
    function linkClick(e) {
        e.preventDefault()
        overlay.classList.remove('overlay--active');
        menu.classList.add('menu-off-canvas--inactive');
        document.body.style.overflow = "";
    }
    
    for(var i = 0; i < link.length; i++) {
        link[i].onclick = linkClick;
    }
    
    window.onscroll = function () {
        if(window.pageYOffset > 50){
            document.querySelector('.menu').classList.add('fixed')
            toggler.classList.add('fixed-menu')
            
        }
        else {
            document.querySelector('.menu').classList.remove('fixed')
        }
    };
        
    new WOW().init();
        
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});



