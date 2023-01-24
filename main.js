                                            /** Declaraciones */

const slideroo = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

                                            /** Funciones */

                                        /** Funciones: Slideshow */

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slideroo.style.marginLeft = "-200%";
    slideroo.style.transition = "all 0.5s";
    setTimeout(function(){
        slideroo.style.transition = "none";
        slideroo.insertAdjacentElement('beforeend', sliderSectionFirst);
        slideroo.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

function Previous() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slideroo.style.marginLeft = "0";
    slideroo.style.transition = "all 0.5s";
    setTimeout(function(){
        slideroo.style.transition = "none";
        slideroo.insertAdjacentElement('afterbegin', sliderSectionLast);
        slideroo.style.marginLeft = "-100%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Previous();
});

setInterval(function(){
    Next();
}, 5000);
                            
                            /** Función: Copiar texto al portapapeles */

function copytoClipboard()
{
    var texttocopy = document.getElementsByClassName(".text_phone").value;
    
        if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texttocopy).then (() =>
        {
        alert("Copied to Clipboard!");
        });
        }
}