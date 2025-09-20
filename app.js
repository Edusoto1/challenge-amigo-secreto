// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Accion 1 : Creacion array para guardar amigos
let listaDeAmigos = [];


//Accion 2 : Creacion de funcion para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value

   if (amigo === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (listaDeAmigos.includes(amigo)){
        alert(`${amigo} ya se encuentra ingresado en la lista!`)
        return;
    }
        // Agregar el nombre al array de amigos
       listaDeAmigos.push(amigo);

       mostrarNombres();

       // Limpiar el campo de entrada
       vaciarInput();
}

//  Creacion de función para actualizar la lista de amigos

function mostrarNombres(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos.length; i++){
        let nombre = document.createElement("li");
        nombre.textContent = listaDeAmigos[i];
        lista.appendChild(nombre);
    }
}

function vaciarInput(){
    document.getElementById("amigo").value = "";
}

//  Creacion de función para sortear los amigo

function sortearAmigo(){
    if (listaDeAmigos.length < 2){
        alert("Ingresa al menos 2 nombres para hacer el sorteo.");
    } 
    else {
    seleccion = Math.floor(Math.random()*listaDeAmigos.length);
    amigoSecreto = listaDeAmigos[seleccion];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let nombre = document.createElement("li");
    nombre.textContent = `¡El amigo seleccionado es ${amigoSecreto}!`
    resultado.appendChild(nombre);
    return;
    }
}
