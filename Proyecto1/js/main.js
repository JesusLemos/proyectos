
// Funciones y metodos
const CREARDOM = res => {
  let elegir = document.getElementById('elegirContenido');
  let caja = ''
  let contador=1
    res.forEach(element => {
      
      caja += `<div class="elemento" draggable="true" ondragstart="evdragstart(event)" id="element${contador}" ><p>${element.title}</p>
      <p>Genero: ${element.genre}</p><video src="${element.stream_url}?client_id=aa06b0630e34d6055f9c6f8beb8e02eb" style="background-image: url(${element.artwork_url});  background-repeat: no-repeat; background-position: top;"></div>`
      contador++;
     

    });
    elegir.innerHTML=caja
}







//Cargar el domn
document.addEventListener("DOMContentLoaded", function( ) {
  console.log("DOM fully loaded and parsed");
});

SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
  });


const URL = '/tracks/'

SC.get(URL, { q: "Nani!? She A Scammer", limit: 4}).then(res =>CREARDOM(res))



// Drag && Drop (Version Copiar)
function evdragstart(ev){
  ev.dataTransfer.setData ("text/plain", ev.target.id);
}
function evdrop(ev){
document.getElementById('añadirMusica').innerHTML='';
ev.preventDefault();
let data=ev.dataTransfer.getData("text");
let idData = document.getElementById(data)

let clonarData = ev.target.appendChild(idData.cloneNode(true));
clonarData.removeAttribute("draggable")

clonarData.lastChild.setAttribute("controls", "")
// clonarData.lastChild.setAttribute("autoplay", "")
// prueba.removeAttribute("draggable")

}
function evdragover(ev){
  ev.preventDefault()
}