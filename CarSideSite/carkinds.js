let mainText = document.querySelector("h1");

window.addEventListener('scroll',function () {
    let value = window.scrollY;
    // console.log("scrollY",value);

    if (value >= 400) {
        mainText.style.animation = 'disappear 2s ease-out forwards';
    }

    else {
        mainText.style.animation = 'slide 2s ease-out';
    }
});

