

//Cargar el domn y
document.addEventListener("DOMContentLoaded", function( ) {
  console.log("DOM fully loaded and parsed");
});





SC.initialize({
  client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
});


// Funciones y metodos
const CREARDOM = res => {
  let elegir = document.getElementById('elegirContenido');
  let caja = ''
  let contador=1
  res.forEach(element => {
    
    caja += `<div class="elemento" draggable="true" ondragstart="evdragstart(event)" id="${element.id}" >

    <p>${element.title}</p>
    <p>Genero: ${element.genre}</p> </div>`
    
    
    contador++;
    
    // } else{
      //   prueba.style.property="background-image: url(${element.artwork_url})";
      //   prueba.style.property="background-repeat: no-repeat";
      //   prueba.style.property="background-position: top";
      
      // }
    });
    elegir.innerHTML=caja
    
    contador=1
    
}

const buscador = () => {
  let musica = document.getElementById('textoBuscar').value
  // console.log(musica)
  SC.get('/tracks/', { q:musica }).then(res =>CREARDOM(res))
}












// Drag && Drop (Version Copiar)

function evdragstart(ev){
  ev.dataTransfer.setData ("text", ev.target.id);
}
function evdrop(ev){

  let producir = document.getElementById('añadirMusica')
  producir.innerHTML=""

    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");

    let urlIframe=`<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data}?client_id=aa06b0630e34d6055f9c6f8beb8e02eb"
    width="100%" height="166" scrolling="no" frameborder="no" ></iframe>`

    producir.innerHTML=urlIframe;
  }


function evdragover(ev){
  ev.preventDefault()
}