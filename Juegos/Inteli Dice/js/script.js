let input = document.querySelector(".input");
let iconoReproducir = document.querySelector("#icono");
let cuerpo = document.querySelector(".body");
let inteli = document.querySelector(".inteli");
let reproduciendo = 0;
let texto;


function verificarPlayStop(){
    if(reproduciendo == 0)
    {
    verificarHaytexto();
    }
    else{
    iconoReproducir.className = "fa-solid fa-circle-play";
    inteli.style.backgroundImage = `url('./img/inteli.png')`;
    reproduciendo = 0;
    }
}

function verificarHaytexto(){
    if(input.value != ""){
        reproduciendo = 1;
        iconoReproducir.className = "fa-solid fa-circle-stop";
        inteli.style.backgroundImage = `url('./img/inteli-hablando.png')`;
        texto = input.value;
        cuerpo.style.voiceFamily = "male";
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        input.value = "";
    }
}