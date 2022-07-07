const tarjetas=document.querySelectorAll('.tarjeta')

tarjetas.forEach((tarjeta)=>{

    tarjeta.addEventListener('click',()=>{
        
        if(tarjeta.classList.contains("active")){
            tarjeta.classList.toggle("active")
        }else{
            tarjeta.forEach((tarjeta)=>tarjeta.classList.remove("active"))
            tarjeta.classList.add("active");
        }
    })
})



