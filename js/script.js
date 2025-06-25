const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//Imprime todo el input con los id correspondientes:
// console.log(nombre);
// console.log(email);
// console.log(mensaje);

//Imprime el valor de los inputs al cambiar el valor:
// nombre.addEventListener('input', function() {
//     console.log(`Nombre: ${nombre.value}`);
// })
// email.addEventListener('input', function() {
//     console.log(`Email: ${email.value}`);
// })
// mensaje.addEventListener('change', function() {
//     console.log(`Mensaje: ${mensaje.value}`);
// })

// Funcion para captar los datos de los inputs:

function RecogerDatos() {
    const datos = {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
    }
    console.log(datos);
}

// nombre.addEventListener('input', RecogerDatos);
// email.addEventListener('input', RecogerDatos);
// mensaje.addEventListener('change', RecogerDatos);

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); //Evita que el formulario se envíe y recarge la página
    ValidarFormulario();
});

function ValidarFormulario() {
    if (nombre.value === '' || email.value === '' || mensaje.value === '') {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    } else {        
        mostrarAlerta('Formulario enviado correctamente');
        RecogerDatos();
        formulario.reset();
    }
}
// Ctrl +k +c para ocultar una o varias líneas de código
// Ctrl +k +u para desocultar una o varias líneas de código.

// //Crear error personalizado:
// function Error(mensaje) {
//     const error = document.createElement('P');
//     error.classList.add('error');
//     error.textContent = mensaje;
//     formulario.appendChild(error);

//     setTimeout(() => {
//         error.remove();
//     },3000); // Elimina el mensaje de error después de 3 seguundos
// }

// //Crear mensaje de éxito personalizado:
// function Exito(mensaje) {
//     const exito = document.createElement('P');
//     exito.classList.add('exito');
//     exito.textContent = mensaje;
//     formulario.appendChild(exito);

//     setTimeout(() => {
//         exito.remove();
//     },3000); // Elimina el mensaje de error después de 3 seguundos
// }


// Refactorizando el código de las funciones de error y éxito para evitar para unificar en una sola funciòn.:

function mostrarAlerta (mensaje, error = null){ // ponemos por defecto null, para evitar poner un valor al llamar la función
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error){
        alerta.classList.add('error');
    }else {
        alerta.classList.add('exito');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    },3000); // Elimina el mensaje de error después de 3 seguundos
}