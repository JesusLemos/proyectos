

//Cargar el domn
document.addEventListener("DOMContentLoaded", function( ) {
  console.log("DOM fully loaded and parsed");
});

// Funciones y metodos
const CREARDOM = res => {
  let elegir = document.getElementById('elegirContenido');
  let caja = ''
  let contador=1
  let prueba = ''
  res.forEach(element => {
    
    caja += `<div class="elemento" draggable="true" ondragstart="evdragstart(event)" id="element${contador}" ><p>${element.title}</p>
    <p>Genero: ${element.genre}</p><video id=v${contador} src="${element.stream_url}?client_id=aa06b0630e34d6055f9c6f8beb8e02eb"></div>`
    elegir.innerHTML=caja
    
   
      contador++;
      
      // } else{
      //   prueba.style.property="background-image: url(${element.artwork_url})";
      //   prueba.style.property="background-repeat: no-repeat";
      //   prueba.style.property="background-position: top";
        
      // }
    });

    contador=1
    res.forEach(element =>{
      
      prueba =  document.getElementById('v'+contador)
      if(element.artwork_url === null){
        // prueba.style.property="background-image: url('sonido.png')";
        console.log('Hola ')
        prueba.style.backgroundImage =`url('../img/sonido.png')`
        prueba.style.backgroundRepeat="no-repeat";
        prueba.style.backgroundPosition ="top";
        }else{
          console.log('adios ')
          // console.log()
          prueba.style.backgroundImage=`url(${element.artwork_url})`
          prueba.style.backgroundRepeat="no-repeat";
          prueba.style.backgroundPosition ="top";
        }
        contador++;
    })
}

const buscador = () => {
  let musica = document.getElementById('textoBuscar').value
  console.log(musica)
  SC.get('/tracks/', { q:musica }).then(res =>CREARDOM(res))
}






SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
  });








// Drag && Drop (Version Copiar)

function evdragstart(ev){
  ev.dataTransfer.setData ("text", ev.target.id);
}
function evdrop(ev){

  let producir = document.getElementById('añadirMusica')
  producir.innerHTML=""

    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");
    let idData = document.getElementById(data)
    let clonarData = ev.target.appendChild(idData.cloneNode(true));
    producir.appendChild(clonarData)
    clonarData.removeAttribute("draggable")
    clonarData.lastChild.setAttribute("controls", "")
}
function evdragover(ev){
  ev.preventDefault()
}