//Haz tú validación en javascript acá

const nombre=document.getElementById("txt_nombre")
const asunto=document.getElementById("txt_asunto")
const emai=document.getElementById("txt_email")
const mensaje=document.getElementById("txt_mensaje")
const boton=document.querySelector(".formcontato__botao")


boton.addEventListener('click',function (){
    if(nombre.textContent!="" && asunto.textContent!="" && emai.textContent!=""){
        alert("Datos Enviados Correctamente")
    }else{
        alert("No Dejar ningun campo sin contenido")
    }
    


})




