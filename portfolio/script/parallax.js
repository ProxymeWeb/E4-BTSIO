document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')


    const x= (window.innerWidth - e.pageX*0.3*speed) /100

    layer.style.transform=`translateX(${x}px) rotate(15deg)`
  })
}
