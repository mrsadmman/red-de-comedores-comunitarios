class Comedor {
  constructor(nombre, cantidad, ubic) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.ubic = ubic;
  }
}
const comedor1 = new Comedor("El Gomero", 50, "Barrancas de Belgrano");
const comedor2 = new Comedor("Manitos", 30, "Parque Centenario");
const comedor3 = new Comedor("Doña Tota", 60, "Villa Fiorito");

//const comedores = [comedor1, comedor2, comedor3];

/* AGREGAR UN NUEVO COMEDOR  PESTAÑA COMEDORES*/
const miFormulario = document.getElementById("formulario");

const nombreComedor = document.getElementById("nombreComedor");
const cantidad = document.getElementById("cantidad");
const direc = document.getElementById("direc");
const btnGuardar = document.getElementById("btnGuardar");

const nuevoComedor = [];

btnGuardar.addEventListener("click", agregarComedor);

function agregarComedor(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();

  if (nombreComedor.value && cantidad.value && direc.value) {
    const newHTML = document.createElement("p");
    newHTML.innerHTML =
      "<h2>Se registro un nuevo comedor</h2> <br>  <h2>Los Datos son:</h2> " +
      "<h3>Nombre Del Comedor</h3> <br>" +
      nombreComedor.value +
      "<h3>Cantidad de Comensales</h3> <br>" +
      cantidad.value +
      "<h3>Ubicacion</h3> <br>" +
      direc.value;
    miFormulario.append(newHTML);
  } else {
    alert("Completa el formulario");
  }

  nombreComedor.value = "";
  cantidad.value = "";
  direc.value = "";
}
/* AGREGAR UN NUEVO COMEDOR  PESTAÑA COMEDORES */