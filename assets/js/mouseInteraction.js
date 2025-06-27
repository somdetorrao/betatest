const mouseInText = () =>{
 const theText  = document.getElementById("reactive-text");

 theText.addEventListener("mouseover", () => {
    theText.style.opacity = ".1"
    theText.style.transition = "opacity .7s"
    
 })

  theText.addEventListener("mouseleave", () => {
    theText.style.opacity = "1"
    theText.style.transition = "opacity .7s"
    
 })

}

mouseInText();