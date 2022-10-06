let mainText = document.querySelector("h1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    console.log("scrollY",value);

    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 400) {
            mainText.style.animation = 'disappear 2s ease-out forwards';
        }
        else {
            mainText.style.animation = 'slide 2s ease-out';
        }      
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 200) {
            mainText.style.animation = 'disappear 2s ease-out forwards';
        }
        else {
            mainText.style.animation = 'slide 2s ease-out';
        } 
    }
});

let subText = document.querySelector(".textp1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    
    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 900) {
            subText.style.animation = 'grow1 2s ease-out';        
        } 
        else {
            subText.style.animation = 'grow2 2s ease-out forwards';      
        }     
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 700) {
            subText.style.animation = 'grow1 2s ease-out';        
        } 
        else {
            subText.style.animation = 'grow2 2s ease-out forwards';      
        }
    }
});

let subText1 = document.querySelector(".textp2");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 1800) {
        subText1.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText1.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText2 = document.querySelector(".textp3");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 2600) {
        subText2.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText2.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText3 = document.querySelector(".textp4");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 3700) {
        subText3.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText3.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText4 = document.querySelector(".textp5");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 4600) {
        subText4.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText4.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText5 = document.querySelector(".textp6");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 5500) {
        subText5.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText5.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText6 = document.querySelector(".textp7");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 6400) {
        subText6.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText6.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText7 = document.querySelector(".textp8");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 7300) {
        subText7.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText7.style.animation = 'grow2 2s ease-out forwards';      
    }
});

let subText8 = document.querySelector(".textp9");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 8200) {
        subText8.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText8.style.animation = 'grow2 2s ease-out forwards';      
    }
});

jQuery(document).ready(function() {
    var scrollSmoth = function(target) {
        if (0 <= jQuery(window).scrollTop()) {
            target.stop().animate({
                 // #subNav를 수직중앙에 놓기위한 계산식
                top: (jQuery(window).scrollTop() + (jQuery(window).height() * 0.5)) - (target.height() / 2)
            }, 400);
        }
    }
    scrollSmoth(jQuery('#subNav'));

    jQuery(window).on('scroll', function() {
        scrollSmoth(jQuery('#subNav'));
    });

    var i;
    var objTop = new Array;
    for (i = 0; i < jQuery('#contentWrap > div').length; i++) {
        objTop.push(jQuery('#contentWrap > div').eq(i).offset().top);
    }

    jQuery('#subNav > ul > li').on('click', function() {
        jQuery("html, body").stop().animate({
            scrollTop: objTop[jQuery('li').index(this)],
        }, 400);
    })
});

jQuery(document).ready(function() {
    var scrollSmoth = function(target) {
        if (0 <= jQuery(window).scrollTop()) {
            target.stop().animate({
                 // #subNav를 수직중앙에 놓기위한 계산식
                top: (jQuery(window).scrollTop() + (jQuery(window).height() * 0.5)) - (target.height() / 2)
            }, 400);
        }
    }
    scrollSmoth(jQuery('#subNav2'));

    jQuery(window).on('scroll', function() {
        scrollSmoth(jQuery('#subNav2'));
    });

    var i;
    var objTop = new Array;
    for (i = 0; i < jQuery('#contentWrap > div').length; i++) {
        objTop.push(jQuery('#contentWrap > div').eq(i).offset().top);
    }

    jQuery('#subNav2 > ul > li').on('click', function() {
        jQuery("html, body").stop().animate({
            scrollTop: objTop[jQuery('li').index(this)],
        }, 400);
    })
});