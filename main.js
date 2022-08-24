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

/* AGREGAR UN NUEVO COMEDOR */
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target;
  //Obtengo el valor del primero hijo <input type="text">
  console.log(document.getElementById("nombre").value);
  //Obtengo el valor del segundo hijo <input type="number">
  console.log(document.getElementById("cantidad").value);
  console.log(document.getElementById("direc").value);
  console.log(document.getElementById("formulario"));
}
