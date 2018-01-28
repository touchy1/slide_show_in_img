var images = [
    "images/1.jpg",
    "images/2.jfif",
    "images/3.jfif",
    "images/4.jfif",
];
var index = 0;
var image = document.querySelector('img');
var prev = document.querySelector('#prev');
function prevFn () {
    index--
    index = index < 0 ? images.length - 1 : index;
    console.log(index);
    image.setAttribute('src', images[index])
}
prev.addEventListener('click', prevFn);

var next = document.querySelector('#next');
function nextFn () {
    index ++
    index = index > images.length - 1 ? 0 : index;
    console.log(index)
    image.setAttribute('src', images[index])
}
next.addEventListener('click', nextFn);
setInterval(nextFn, 3000);