let fan =document.getElementById("fan")
document.addEventListener("click", function(e){
    let target = e.target;
    let name = target.getAttribute("class");
     fan.classList.remove('stop','one','two','three');
 if(name !=null){
        fan.classList.add(name);
    }
   
})
