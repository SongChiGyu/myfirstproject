let mainText = document.querySelector("h1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value >= 400) {
        mainText.style.animation = 'disappear 2s ease-out forwards';
    }

    else {
        mainText.style.animation = 'slide 2s ease-out';
    }
});

let subText = document.querySelector(".textp1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 900) {
        subText.style.animation = 'grow1 2s ease-out';        
    } 
    else {
        subText.style.animation = 'grow2 2s ease-out forwards';      
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

$(document).ready(function(){
    var currentPosition = parseInt($(".quickmenu").css("top")); 
    $(window).scroll(function() { 
        var position = $(window).scrollTop(); 
        $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000); 
    }); 
});

