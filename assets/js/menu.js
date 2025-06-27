const moveMenu = () =>{
    const theDiv = document.getElementById("toggle-menu");
    const theButton = document.getElementById("the-menu-button");
    const theBody = document.querySelector('body');
    const theHTML = document.documentElement;

    let isVisible = false;

    theButton.addEventListener("click", () => {
   
        if (isVisible){

            theDiv.classList.remove("visible");
            theBody.classList.remove("no-scroll");
            theHTML.classList.remove("no-scroll");


            
            
        }else{
        
            theDiv.classList.add("visible");
            theBody.classList.add("no-scroll");
            theHTML.classList.add("no-scroll");
  


        }

        isVisible = !isVisible;
     

    });
    
}

moveMenu();