var flyBtn = document.getElementById("fli");
var houseBtn = document.getElementById("log");
var driveBtn = document.getElementById("chaf");
var head = document.getElementById("span");
var section= document.getElementById("sect")



flyBtn.addEventListener("click",flyDisplay)
houseBtn.addEventListener("click",houseDisplay)
driveBtn.addEventListener("click",driveDisplay)

function flyDisplay(){
    houseBtn.classList.remove("ind-active")
    driveBtn.classList.remove("ind-active")
    flyBtn.classList.add("ind-active")
    head.textContent="Get the best flight deals now"
    section.style.backgroundImage  = "url(assets/images/tab.jpg)"
    section.style.backgroundPosition = "unset"
    section.style.backgroundSize = "cover"
    


}

function houseDisplay(){
    houseBtn.classList.add("ind-active")
    driveBtn.classList.remove("ind-active")
    flyBtn.classList.remove("ind-active")
    head.textContent="Accomodations; affordable,comfortable just the way you want it"
    section.style.backgroundImage  = "url(assets/images/kpy-pattern-dark.png)"
    section.style.backgroundPosition = "right"
    section.style.backgroundSize = "contain"

}
 function driveDisplay(){
    houseBtn.classList.remove("ind-active")
    driveBtn.classList.add("ind-active")
    flyBtn.classList.remove("ind-active")
    head.textContent="Book your ride without hassle"
 }

