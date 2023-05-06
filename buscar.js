const productos=[
  {nombre:'Cerveza palermo', Valor:460},
  {nombre:'Manaos', valor:250},
  {nombre:'gancia', valor:500},
  {nombre:'coca', valor:400},
  {nombre:'sneider', valor:300},

]
const formulario=document.querySelector('#formulario');
const boton= document.querySelector('#boton');
const resultado = document.querySelector('#resultado')
const filtrar=()=>{
 // console.log(formulario.value);
 resultado.innerHTML="";
 const texto=formulario.valur.toLowerCase();
  boton.addEventListener('click',filtrar)
  formulario.addEventListener('keyup')
  for(let producto of productos){
    let nombre= producto.nombre.toLowerCase();
    if(nombre.indexOf (texto)!== 1 ){
      resultado.innerHTML += ` <li>${producto.nombre} - Valor: ${producto.valor}</li> `
    }
   }
   if(resultado.innerHTML===""){
    resultado.innerHTML += ` <li>Producto no encontrado ...</li> `
   }
}












