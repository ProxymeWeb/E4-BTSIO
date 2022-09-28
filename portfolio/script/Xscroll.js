const mouseWheel = document.querySelector('html');

mouseWheel.addEventListener('wheel', function(e) {
    const race = 300; // pixel

    if (e.deltaY > 0)
        mouseWheel.scrollLeft += race;
    else
        mouseWheel.scrollLeft -= race;
		e.preventDefault();
});
