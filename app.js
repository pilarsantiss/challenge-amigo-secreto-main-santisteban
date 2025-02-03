//se crea un array vacio para poder añadirle los nombres a sortear
let arregloAmigos = [];
//luego se crea una funcion la cual en el html ya se nombro con "onclick"
function agregarAmigo () {
    //creamos una variable usando los nombres introducidos en html en un input
    const nombre = document.getElementById('amigo').value;
    //chequeamos que el input no este vacio
    if (nombre.trim() !== ''){
        //si no esta vacio se agrega ese valor (en este caso el nombre) al arreglo mediante un push
        arregloAmigos.push(nombre);
        //se actuliza la lista de nuestro array mediante otra funcion
        actualizarListaAmigos();
        //se limpia el campo dentro del input luego de agregar un nombre
        document.getElementById('amigo').value = ' '; 
    } else {
        //si no se escribe ningun nombre en el campo input aparecera una alerta
        alert('Por favor, ingrese un nombre')
    }
}

//la proxima funcion  hara que se realice el sorteo, tambien llamada dentro del html con "onclick"
function sortearAmigo() {
    //primero se fija que el arreglo no este vacio
    if (arregloAmigos.length > 0 ) {
        //se crea una variable para obtener un valor random dentro del array
        const nombreRandom = Math.floor(Math.random() * arregloAmigos.length);
        //se obtine el resultado del sorteo
        const nombreGanador = arregloAmigos[nombreRandom];
        //para mostrar en la pagina el ganador
        document.getElementById('resultado').innerText = nombreGanador;
    } else {
         //si no se escribe ningun nombre en el campo input, por ende el arreglo esta vacio, aparecera una alerta
         alert('Por favor, ingrese más de un nombre')
    }
}
//por ultimo creamos la funcion para que se agregen y se muetren los nombre a sortear en una lista
function  actualizarListaAmigos() {
    //debemos llamar a donde queremos mostrar nuestra lista
    const itemLista = document.getElementById('listaAmigos');
    //borrar si exitiera algun elemento en la lista
    itemLista.innerHTML = '';
    //se agregan los valores del arreglo como elementos de la lista
    arregloAmigos.forEach(item => {
        const amigoItemLista = document.createElement('li');
        amigoItemLista.textContent = item;
        itemLista.appendChild(amigoItemLista);
    })
}