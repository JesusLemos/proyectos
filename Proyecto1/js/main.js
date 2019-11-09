SC.initialize({
  client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
});


// Funciones y metodos
const CREARDOM = res => {
  let elegir = document.getElementById('elegirContenido');
  let caja = ''
  let img =''
  
  res.forEach(element => {
    if(element.artwork_url===null){
      img = `../img/sonido.png`
      } else{
        img= element.artwork_url.replace('-large','-t500x500');
       
        }

    caja += `
    <div class="elemento" draggable="true" ondragstart="evdragstart(event)" id="${element.id}" >
      <img src="${img}" draggable="false" alt="Fallo al cargar" width="100%" heigth="25%"  >
      <div>
        <p>Titulo: ${element.title}</p>
        <p>Genero: ${element.genre}</p>
      </div> 
    </div>`
   
  });
 
    
    elegir.innerHTML=caja
    
}

const buscador = () => {
  let musica = document.getElementById('textoBuscar').value
  SC.get('/tracks/', { q:musica }).then(res =>CREARDOM(res))
}




// Drag && Drop (Version Copiar)

function evdragstart(ev){
  ev.dataTransfer.setData ("text/plain", ev.target.id);
}
function evdrop(ev){

  let producir = document.getElementById('producirMusica')
  producir.innerHTML=""

    ev.preventDefault();
    let data=ev.dataTransfer.getData("text");
console.log()
    let urlIframe=`<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data}?client_id=aa06b0630e34d6055f9c6f8beb8e02eb"
    width="100%" height="100%" scrolling="no" frameborder="no" ></iframe>`

    producir.innerHTML=urlIframe;
  }


function evdragover(ev){
  ev.preventDefault()
}