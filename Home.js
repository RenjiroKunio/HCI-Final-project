const buttonLeft = document.querySelectorAll('#left-button');
const buttonRight = document.querySelectorAll('#right-button');

console.log(buttonRight);

for (let i = 0; i < buttonRight.length; i++) {
    const button = buttonRight[i]
    const container = button.parentNode.querySelector('.trip-container')
    button.onclick = function () {
        console.log("clicked");
        console.log(container)
        container.scrollLeft += 1000;
    };
}

for (let i = 0; i < buttonLeft.length; i++) {
    const button = buttonLeft[i]
    const container = button.parentNode.querySelector('.trip-container')
    button.onclick = function () {
        console.log("clicked");
        container.scrollLeft -= 1000;
    };
}