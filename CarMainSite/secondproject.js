let subText = document.querySelector(".textany1");



window.addEventListener('scroll',function () {
    let value = window.scrollY;
    console.log("scrollY",value);

    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 1000) {
            subText.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            subText.style.animation = 'fadeInUp2 1s forwards';      
        }        
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 800) {
            subText.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            subText.style.animation = 'fadeInUp2 1s forwards';      
        }
    }    
});

let goodText1 = document.querySelector(".textany2");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    
    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 1900) {
            goodText1.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText1.style.animation = 'fadeInUp2 1s forwards';      
        }        
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 1500) {
            goodText1.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText1.style.animation = 'fadeInUp2 1s forwards';      
        }
    } 
});

let goodText2 = document.querySelector(".textany3");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    
    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 2800) {
            goodText2.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText2.style.animation = 'fadeInUp2 1s forwards';      
        }        
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 2300) {
            goodText2.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText2.style.animation = 'fadeInUp2 1s forwards';      
        }
    }
});

let goodText3 = document.querySelector(".textany4");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    
    if (window.matchMedia("(min-width: 400px)").matches) {
        /* 뷰포트 너비가 400 픽셀 이상 */
        if (value >= 3700) {
            goodText3.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText3.style.animation = 'fadeInUp2 1s forwards';      
        }        
    } 
    else {
        /* 뷰포트 너비가 400 픽셀 미만 */
        if (value >= 2900) {
            goodText3.style.animation = 'fadeInUp1 1s';       
        }    
        else {
            goodText3.style.animation = 'fadeInUp2 1s forwards';      
        }
    }
});

pageTransition(document.querySelectorAll("a"));
document.body.classList.add("reveal");

function isSameAsLocation(uriString) {
    const uri = new URL(uriString);

    return (
        uri.origin === window.location.origin &&
        uri.pathname === window.location.pathname
    );
}

function pageTransition(nodeList) {
    nodeList.forEach((node) => {
        if (!(node instanceof HTMLAnchorElement)) return;

        const { href } = node;

        if (!href || node.target === "_blank" || isSameAsLocation(href)) return;

        node.addEventListener("click", (event) => {
            event.preventDefault();

            document.body.addEventListener(
                "transitionend",
                () => {
                    window.location.href = href;
                },
                { passive: true, once: true }
            );
            document.body.classList.add("hidden");
        });
    });
}
