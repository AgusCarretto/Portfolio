let burgaActive = false;
let allSections = document.querySelector(".containerSection");


document.querySelector("#menuBurga").addEventListener("click", blurearMenu);

function blurearMenu () {
    burgaActive = !burgaActive;
    if(burgaActive)
        
        allSections.classList.add("blur");
    
    else
        allSections.classList.remove("blur");
    
  
}

