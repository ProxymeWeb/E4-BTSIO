const mouseWheel = document.querySelector('html');
  const ecran = screen.width;
mouseWheel.addEventListener('wheel', function(e) {
  // pixel
    console.log(ecran);
    if (e.deltaY > 0)
        mouseWheel.scrollLeft += ecran
    else
        mouseWheel.scrollLeft -= ecran;

});
