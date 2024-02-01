var color = document.getElementById('color');

document.addEventListener('mousedown', function () {
    color.style.backgroundColor = '#FFFF00';
});

document.addEventListener('keydown', function () {
    color.style.backgroundColor = '#CCE6FF';
});

document.addEventListener('mousemove', function () {
    color.style.backgroundColor = 'white';
});


