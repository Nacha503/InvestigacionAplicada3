// GET 
let btnGet = document.querySelector('#btnGet');

btnGet.addEventListener('click', function () {





    fetch('http://localhost:3000/Equipos')
        .then(res => res.ok ? Promise.resolve(res) : Promisse.reject(res))
        .then(res => res.json())
        .then(res => {

            console.log(res.length);
            let parent = document.querySelector('#parent_avatars');
            parent.innerHTML = "";

            for (let index = res.length; index > 0; index--) {



                let tarjeta = "";



                tarjeta += '<div class="col-sm-4">';
                tarjeta += '<div class="card">';
                tarjeta += '<div class="card-delete" res[index]-card="' + index + '">' + res[index-1].id + '</div>';
                tarjeta += '<h3 class="card-title">' + res[index-1].Nombre + '</h3>';
                tarjeta += '<p class="card-text">';
                tarjeta += '<strong>Ciudad : <span>' + res[index-1].Ciudad + '</span> </strong>';
                tarjeta += '</p>';
                tarjeta += '<p class="card-text">';
                tarjeta += '<strong>Año Fundacion: <span>' + res[index-1].AñoFundacion + '</span> </strong>';
                tarjeta += '</p>';
                tarjeta += '<p class="card-text">';
                tarjeta += '<strong>Entrenador <span>' + res[index-1].Entrenador + '</span> </strong>';
                tarjeta += '</p>';
                tarjeta += '<p class="card-text">';
                tarjeta += '<strong>Estadio: <span>' + res[index-1].Estadio + '</span> </strong>';
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





