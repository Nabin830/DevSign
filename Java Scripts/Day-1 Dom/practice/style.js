var bulb = document.getElementById("bulb")
bulb.onclick = function(){
    bulb.classList.toggle('on')
}
  function bulbOn (){
    bulb.classList.add('on')
  }
  function bulbOf (){
    bulb.classList.remove('on')
  }