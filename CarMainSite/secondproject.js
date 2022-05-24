let subText = document.querySelector(".textany1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value >= 1000) {
        subText.style.animation = 'fadeInUp1 1s';        
    } 
    else {
        subText.style.animation = 'fadeInUp2 1s forwards';      
    }
});

let goodText1 = document.querySelector(".textany2");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 1900) {
        goodText1.style.animation = 'fadeInUp1 1s';        
    } 
    else {
        goodText1.style.animation = 'fadeInUp2 1s forwards';      
    }
});

let goodText2 = document.querySelector(".textany3");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 2800) {
        goodText2.style.animation = 'fadeInUp1 1s';        
    } 
    else {
        goodText2.style.animation = 'fadeInUp2 1s forwards';      
    }
});

let goodText3 = document.querySelector(".textany4");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    

    if (value >= 3700) {
        goodText3.style.animation = 'fadeInUp1 1s';        
    } 
    else {
        goodText3.style.animation = 'fadeInUp2 1s forwards';      
    }
});