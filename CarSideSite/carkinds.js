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

// let subText = document.querySelector("p");

// window.addEventListener('scroll',function () {
//     let value = window.scrollY;
//     // console.log("scrollY",value);

//     if (value >= 500) {
//         mainText.style.animation = 'grow 2s ease-out';
//     }
// });

