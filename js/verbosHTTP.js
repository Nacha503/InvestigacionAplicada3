// GET 
let btnGet = document.querySelector('#btnGet');

btnGet.addEventListener('click', function () {

    let parent = document.querySelector('#parent_avatars');

    parent.innerHTML = "";

    const arrayDatos = fetch('http://localhost:3000/Equipos')
        .then(response => response.json());


    arrayDatos.then(datos => {

        let tarjeta = "";

        for (let index = 0; index < datos.length; index++) {

            tarjeta += '<div class="col-sm-4">';
            tarjeta += '<div class="card">';
            tarjeta += '<div class="card-delete" data-card="' + index + '">' + datos[index].id + '</div>';
            tarjeta += '<h3 class="card-title">' + datos[index].Nombre + '</h3>';
            tarjeta += '<p class="card-text">';
            tarjeta += '<strong>Ciudad : <span>' + datos[index].Ciudad + '</span> </strong>';
            tarjeta += '</p>';
            tarjeta += '<p class="card-text">';
            tarjeta += '<strong>Año Fundacion: <span>' + datos[index].AñoFundacion + '</span> </strong>';
            tarjeta += '</p>';
            tarjeta += '<p class="card-text">';
            tarjeta += '<strong>Entrenador <span>' + datos[index].Entrenador + '</span> </strong>';
            tarjeta += '</p>';
            tarjeta += '<p class="card-text">';
            tarjeta += '<strong>Estadio: <span>' + datos[index].Estadio + '</span> </strong>';
            tarjeta += '</p>';
            tarjeta += '</div> ';
            tarjeta += '</div>';
            tarjeta += '</div>';

            parent.insertAdjacentHTML("afterbegin", tarjeta);

        }
    });

});

// POST

let botonPost = document.querySelector('#btnPost');

botonPost.addEventListener('click', function () {



    let inputNombre = document.getElementById('nombre').value;
    let inputCiudad = document.getElementById('ciudad').value;
    let inputAñoFundacion = parseInt(document.getElementById('fundacion').value);
    let inputEntrenador = document.getElementById('entrenador').value;
    let inputEstadio = document.getElementById('estadio').value;
    let inputLiga = parseInt(document.getElementById('liga').value);



    fetch('http://localhost:3000/Equipos', {
        method: 'POST',
        body: JSON.stringify({


            Nombre: inputNombre,
            Ciudad: inputCiudad,
            AñoFundacion: inputAñoFundacion,
            Entrenador: inputEntrenador,
            Estadio: inputEstadio,
            LigasId: inputLiga
        }),
        headers: {
            "Content-type": " application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
});



//put
let btnPut = document.querySelector('#btnPut');

btnPut.addEventListener('click', function () {

    let idEquipo = prompt("Escriba el id del equipo a actualizar ");
    let inputNombre = document.getElementById('nombre').value.trim();
    let inputCiudad = document.getElementById('ciudad').value.trim();
    let inputAñoFundacion = parseInt(document.getElementById('fundacion').value);
    let inputEntrenador = document.getElementById('entrenador').value.trim();
    let inputEstadio = document.getElementById('estadio').value.trim();
    let inputLiga = parseInt(document.getElementById('liga').value);

    let json = {};

    if (inputNombre)
        json.Nombre = inputNombre;

    if (inputCiudad)
        json.Ciudad = inputCiudad;

    if (inputAñoFundacion)
        json.AñoFundacion = inputAñoFundacion;

    if (inputNombre)
        json.Entrenador = inputEntrenador;

    if (inputEstadio)
        json.Estadio = inputEstadio;

    if (inputLiga)
        json.Ligasid = inputLiga;

    fetch('http://localhost:3000/Equipos/' + idEquipo, {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
});


//patch
let btnPatch = document.querySelector("#btnPatch");

btnPatch.addEventListener('click', function () {

    let id = prompt("Ingrese el id a modificar");
    let inputNombre = document.getElementById('nombre').value.trim();
    let inputCiudad = document.getElementById('ciudad').value.trim();
    let inputAñoFundacion = parseInt(document.getElementById('fundacion').value);
    let inputEntrenador = document.getElementById('entrenador').value.trim();
    let inputEstadio = document.getElementById('estadio').value.trim();
    let inputLiga = parseInt(document.getElementById('liga').value);

    let json = {};

    if (inputNombre)
        json.Nombre = inputNombre;

    if (inputCiudad)
        json.Ciudad = inputCiudad;

    if (inputAñoFundacion)
        json.AñoFundacion = inputAñoFundacion;

    if (inputNombre)
        json.Entrenador = inputEntrenador;

    if (inputEstadio)
        json.Estadio = inputEstadio;

    if (inputLiga)
        json.Ligasid = inputLiga;






    fetch('http://localhost:3000/Equipos/' + id, {
        method: 'PATCH',
        body: JSON.stringify(json),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
});


//delete

let btnDelete = document.querySelector('#btnDelete');

btnDelete.addEventListener('click', function () {

    let idEquipo = prompt("Escriba el id del equipo a eliminar");

    fetch('http://localhost:3000/Equipos/' + idEquipo, {
        method: 'DELETE'
    });
});





