var logIn = document.getElementById("btn2");
var signUp = document.getElementById("btn1");
var section=document.querySelector(".section")
var dubaiBtn = document.getElementById("dubai");
var hkBtn = document.getElementById("hong-kong");
var seoulBtn = document.getElementById("seoul");
var btnName = document.getElementById("demo");
var imageDisplay = document.querySelector(".parallax");


logIn.addEventListener("click",logDisplay)
signUp.addEventListener("click",signDisplay)
hkBtn.addEventListener("click",hkDisplay)
seoulBtn.addEventListener("click",seoulDisplay)
dubaiBtn.addEventListener("click",dubaiDisplay)

function logDisplay(){
    signUp.classList.remove("active-btn")
    logIn.classList.add("active-btn")
    section.style.backgroundImage = "url(assets/images/flogin.jpg)"
    section.style.backgroundAttachment="fixed"
    section.style.backgroundPosition = "center"
    section.style.backgroundRepeat = "no-repeat"
    section.style.backgroundSize = "cover"
    section.style.backgroundMinHeight = "500px"

}

function signDisplay(){
    signUp.classList.add("active-btn")
    logIn.classList.remove("active-btn")
    section.style.background = "url(assets/images/sign.jpg)"
    section.style.backgroundAttachment="fixed"
    section.style.backgroundPosition = "center"
    section.style.backgroundRepeat = "no-repeat"
    section.style.backgroundSize = "cover"
    section.style.backgroundMinHeight = "500px"
}

function hkDisplay(){
    btnName.textContent="Hong-Kong,China";
    dubaiBtn.classList.remove("btn-active")
    imageDisplay.style.backgroundImage="url(assets/images/hk.jpg)"

    seoulBtn.classList.remove("btn-active")
    hkBtn.classList.add("btn-active")
}

function seoulDisplay(){
    btnName.textContent="Seoul,South Korea"
    dubaiBtn.classList.remove("btn-active")
    imageDisplay.style.backgroundImage="url(assets/images/seoul,korea.jpg)"
    hkBtn.classList.remove("btn-active")
    seoulBtn.classList.add("btn-active")
}

function dubaiDisplay(){
    btnName.textContent="Dubai,UAE"
    imageDisplay.style.backgroundImage="url(assets/images/du.jpg)"
    dubaiBtn.classList.add("btn-active")
    hkBtn.classList.remove("btn-active")
    seoulBtn.classList.remove("btn-active")
}


$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})


$("#btn2").on("click",(function() {
   $('#contact').hide(1000,function(){
       $(this).fadeOut()
   });
   $('#form2').show(1000,function(){
       $(this).fadeIn()
   });
   
}))

$("#btn1").on("click",(function(){
     $('#contact').show(1000,function(){
         $(this).fadeIn()
     })
     $('#form2').hide(1000,function(){
         $(this).fadeOut()
     })
}))

$(".form-btn").on("click",function(){
    if($("#realpass").val()!==$("#real2pass").val()){
        alert("Password incorrect.Please type in the same password")
    }
})