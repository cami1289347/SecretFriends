// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

function agregarAmigo() {
    const amigo = document.getElementById('amigo');
    const amigoNombre = amigo.value.trim(); 
    const listaDisplay = document.getElementById('listaAmigos');

    if (amigoNombre) {

        listaAmigos.push(amigoNombre);
        //limpiamos el recuadro
        amigo.value = ' ';
        
        const  ActualizarLista = document.createElement('li');
        ActualizarLista.textContent = amigoNombre;
        listaDisplay.appendChild(ActualizarLista);
    } else {

        alert('Ingrese un nombre valido');
        nombreDisplay.textContent = " "; 
    }
}

function sortearAmigo() {

    const resultadoDisplay = document.getElementById('resultado');

    resultadoDisplay.innerHTML = '';

    if (listaAmigos.length < 2){
        alert("ingresa más de dos personas para el sorteo");
        return;
    }else{

    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.createElement('li');
    resultadoElemento.textContent = `El amigo seleccionado es: ${amigoSeleccionado}`;
    resultadoElemento.classList.add('result-item'); 
    resultadoDisplay.appendChild(resultadoElemento);
    }

}
