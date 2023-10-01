const btnReaccion=document.getElementById('reaccion');
const contenedorListaMusic=document.getElementById('lista-music');
const controles=document.getElementById('controles');
const menuMusic=document.getElementById('menuMusic');
const titlePlaylist=document.getElementById('titlePlaylist');
const playDescription=document.getElementById('playDescription');
const imgAlbum=document.getElementById('imgAlbum');
const album=document.getElementById('album');

//eventos
btnReaccion.addEventListener('click',megusta);
menuMusic.addEventListener('click',cargarInfo)

//funciones
let estado=0;
function megusta()
{
    if(estado===0){
        btnReaccion.classList.add('reaccion-activa')
        estado=1;
    }else if(estado===1){
    btnReaccion.classList.remove('reaccion-activa')
    estado=0;
    }
}


function cargarInfo(){
    let jsonurl='';
    let tittlePlay='';
    let descriptionPlay='';
    let srcImg='';

    if(e.target,classList.contains('playEstudiar')){
        jsonurl='./music/musicJSON/estudiando.json';
        alert('click!!!');
    }
}