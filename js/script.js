const form= document.querySelector('#form');
const btnAgregar=document.querySelector('#agregar');
const btnGuardar=document.querySelector('#guardar');



//variable para almacenar  cada una  de las instancias de contacto
let contactos = [];
console.log(contactos)
//objeto contacto
class contacto {
    constructor() {
      this.nombre = "";
      this.apellido = "";
      this.tel = "";
      this.email = "";
    }
  }

 

//muestra el form para agregar contactos
const agregarContactos = () =>{
    
    
    form.style.display='inline';
    //para que el cursor este en el input de nombre automaticamente
    document.querySelector('#nombre').focus();
}

//ocultar formulario
const ocultarForm = ()=>{
    //de esta forma los input quedan vacio siempre q aprete en agregar
    document.querySelector('#nombre').value=''
    document.querySelector('#apellido').value=''
    document.querySelector('#tel').value=''
    document.querySelector('#email').value=''
    
    form.style.display='none'
}

//registra nuevo contacto
const guardar = (e) =>{
    e.preventDefault();
    const nombre=document.querySelector('#nombre').value;
    const apellido=document.querySelector('#apellido').value;
    const tel=document.querySelector('#tel').value;
    const email=document.querySelector('#email').value;

    let contactoNuevo= new contacto();
    contactoNuevo.nombre=nombre;
    contactoNuevo.apellido=apellido;
    contactoNuevo.tel=tel;
    contactoNuevo.email=email;
    //[contactos.lengt] se va sumando automaticamente
    //contactos[contactos.length]=contactoNuevo
    contactos.push(contactoNuevo)
    
    console.log(contactoNuevo)
    console.log(contactos)
    ocultarForm()
    mostrarContactos()
}

const mostrarContactos =()=>{
    let contactoTotales= document.querySelector('#contactos_totales')
    contactoTotales.innerHTML=''
    //alert(contactos.length)
    contactos.forEach((contacto,index)=>{
        //console.log(index)
        let div = document.createElement('div')
        div.setAttribute('class','contacto')

        div.innerHTML= `<li>
        ${contacto.nombre}</li> </br>
        <li>${contacto.apellido}</li> </br>
        <li>${contacto.tel}</li> </br>
        <li>${contacto.email}</li> </br>
        <button onClick="editar(${index})">editar</button><button onClick="confirmEliminar(${index})">eliminar</button> 
        `
        
        contactoTotales.appendChild(div)
        
    })
    //const btnEditar= document.querySelector(".btn-editar");

    //btnEditar.addEventListener('click',saludar)
}

const confirmEliminar=(id)=>{
    if(confirm("esta seguro?")){
        eliminar(id)
    }
}

const eliminar=(id)=>{
    
        let nuevosContactos = []
        for(x=0;x<contactos.length;x++){
            
            if(x != id ){
                //mostramos
                nuevosContactos[x]=contactos[x]    
            }
                
        }
        contactos=nuevosContactos
        mostrarContactos()
    
}
    


const editar=(id)=>{
    contactoEditado= contactos[id]
    //console.log(contactos[id].nombre)
    eliminar(id)
    agregarContactos()
    document.querySelector('#nombre').value=contactoEditado.nombre
    document.querySelector('#apellido').value=contactoEditado.apellido
    document.querySelector('#tel').value=contactoEditado.tel
    document.querySelector('#email').value=contactoEditado.email


}




btnAgregar.addEventListener('click',agregarContactos);
btnGuardar.addEventListener('click',guardar);


