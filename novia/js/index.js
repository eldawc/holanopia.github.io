let botonMenu = document.querySelector(".botonMenu");
let nav = document.querySelector(".nav-ul");
let botonCerrar = document.getElementById("botonCerrar")
let febrero = document.querySelector(".febrero");


botonMenu.addEventListener("click", function() {
    nav.style.display = "block";
    botonMenu.style.display = "none";
    botonCerrar.style.display = "block";
    febrero.style.top = "5px";
    febrero.style.left = "300px";
});

botonCerrar.addEventListener("click", function () {
    nav.style.display = "none";
    botonCerrar.style.display = "none";
    botonMenu.style.display = "block";
    febrero.style.top = "-45px"
    febrero.style.left = "100px";
});


let contenedor = document.querySelector(".contenedor1");
let empezarJuego = document.querySelector(".empezarJuego");
let botonCorazon = document.querySelector(".botonCorazon")
let botonCorazon2 = document.querySelector(".botonCorazon2")
let botonCorazon3 = document.querySelector(".botonCorazon3")
let botonCorazon4 = document.querySelector(".botonCorazon4");
let botonCorazon5 = document.querySelector(".botonCorazon5");
let botonCorazon6 = document.querySelector(".botonCorazon6");
let botonCorazon7 = document.querySelector(".botonCorazon7");
let botonCorazon8 = document.querySelector(".botonCorazon8");
let botonCorazon9 = document.querySelector(".botonCorazon9");
let botonCorazon10 = document.querySelector(".botonCorazon10");
let botonCorazon11 = document.querySelector(".botonCorazon11");
let rapido = document.querySelector(".rapido");
let ruta = document.querySelector(".contenedor1");
let pucca = document.querySelector(".pucca");
let garu = document.querySelector(".garu");
let corazon1 = document.querySelector(".corazon1");
let corazon2 = document.querySelector(".corazon2");
let corazon3 = document.querySelector(".corazon3");
let corazon4 = document.querySelector(".corazon4");
let corazon5 = document.querySelector(".corazon5");
let corazon6 = document.querySelector(".corazon6");
let texto = document.querySelector(".texto");
let ganaste = document.querySelector(".ganaste");

empezarJuego.addEventListener("click", function() {
    botonCorazon.style.display = "block";
    rapido.style.display = "block";
    ruta.style.display = "block";
});

botonCorazon.addEventListener("click", function () {
    pucca.style.top = "40px";
    garu.style.top = "225px";
    botonCorazon.style.display = "none"
    botonCorazon2.style.display = "block"
});

botonCorazon2.addEventListener("click", function(){
    pucca.style.top = "70px";
    garu.style.top = "255px";
    botonCorazon2.style.display = "none";
    botonCorazon3.style.display = "block";
});
botonCorazon3.addEventListener("click", function(){
    pucca.style.top = "110px";
    garu.style.top = "265px";
    botonCorazon3.style.display = "none";
    botonCorazon4.style.display = "block";
});
botonCorazon4.addEventListener("click", function(){
    pucca.style.top = "140px";
    garu.style.top = "275px";
    botonCorazon4.style.display = "none";
    botonCorazon5.style.display = "block";
});
botonCorazon5.addEventListener("click", function(){
    pucca.style.top = "170px";
    garu.style.top = "285px";
    botonCorazon5.style.display = "none";
    botonCorazon6.style.display = "block";
});
botonCorazon6.addEventListener("click", function(){
    pucca.style.top = "200px";
    garu.style.top = "305px";
    botonCorazon6.style.display = "none";
    botonCorazon7.style.display = "block";
});
botonCorazon7.addEventListener("click", function(){
    pucca.style.top = "215px";
    garu.style.top = "310px";
    botonCorazon7.style.display = "none";
    botonCorazon8.style.display = "block";
});

botonCorazon8.addEventListener("click", function(){
    botonCorazon8.style.left = "40px"
    botonCorazon8.style.top = "360px"
    pucca.style.top = "230px"
    garu.style.top = "320px"
    botonCorazon9.style.display = "block";
});

botonCorazon9.addEventListener("click", function(){
    pucca.style.top = "250px";
    garu.style.top = "322px";
    botonCorazon9.style.display = "none";
    botonCorazon10.style.display = "block";
    corazon1.style.display = "block"
    corazon2.style.display = "block"
    corazon3.style.display = "block"
    corazon4.style.display = "block"
    corazon5.style.display = "block"
    corazon6.style.display = "block"
});

botonCorazon10.addEventListener("click", function (){
    pucca.style.top = "254px";
    corazon1.style.top = "150px"
    corazon2.style.top = "170px"
    corazon3.style.top = "200px"
    corazon4.style.top = "170px"
    corazon5.style.top = "200px"
    corazon6.style.top = "220px"
    texto.style.display = "none";
    botonCorazon10.style.display = "none"
    ganaste.style.display = "block";
    contenedor.style.left = "700px";
});








