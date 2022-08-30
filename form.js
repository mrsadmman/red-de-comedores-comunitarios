class Comedor {
  constructor(nombre, cantidad, ubic) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.ubic = ubic;
  }
}
/* AGREGAR UN NUEVO COMEDOR  PESTAÑA COMEDORES*/
const miFormulario = document.getElementById('formulario');

const nombreComedorr = document.getElementById('nombreComedor');
const cantidad = document.getElementById('cantidad');
const direc = document.getElementById('direc');
const btnGuardar = document.getElementById('btnGuardar');

const nuevoComedor = [];

btnGuardar.addEventListener('click', agregarComedor);


function agregarComedor(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();

  if (nombreComedor.value && cantidad.value && direc.value) {
    const newHTML = document.createElement('p');
    newHTML.innerHTML =
      '<h2>Se registro un nuevo comedor</h2> <br>  <h2>Los Datos son:</h2> ' +
      '<h3>Nombre Del Comedor</h3> <br>' +
      nombreComedor.value +
      '<h3>Cantidad de Comensales</h3> <br>' +
      cantidad.value +
      '<h3>Ubicacion</h3> <br>' +
      direc.value;
    miFormulario.append(newHTML);
  } else {
    alert('Completa el formulario');
  }
  const comedor4 = new Comedor(nombreComedor.value, cantidad.value, direc.value);
  const enJSON = JSON.stringify(comedor4);
  console.log(enJSON); //PONER EL FORMULARIO COMO OBJETO
  localStorage.setItem('comedor4', enJSON);
  /* nombreComedor.value = '';
  cantidad.value = '';
  direc.value = '';  */
}
/* AGREGAR UN NUEVO COMEDOR  PESTAÑA COMEDORES */
