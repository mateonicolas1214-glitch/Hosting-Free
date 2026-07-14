const boton=document.getElementById("btnConocer");

boton.addEventListener("click",function(){

alert("Gracias por visitar nuestro proyecto publicado en Hosting.");

document.getElementById("servicios").scrollIntoView({

behavior:"smooth"

});

});

const formulario=document.getElementById("formulario");

formulario.addEventListener("submit",function(e){

e.preventDefault();

let nombre=document.getElementById("nombre").value.trim();

let correo=document.getElementById("correo").value.trim();

let mensaje=document.getElementById("mensaje").value.trim();

if(nombre==="" || correo==="" || mensaje===""){

alert("Debe completar todos los campos.");

return;

}

alert("Mensaje enviado correctamente.");

formulario.reset();

});

const subir=document.getElementById("subir");

window.addEventListener("scroll",function(){

if(window.scrollY>300){

subir.style.display="block";

}else{

subir.style.display="none";

}

});

subir.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});