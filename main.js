class Comedor {
  constructor(nombre, cantidad, ubic) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.ubic = ubic;
  }
  nombreComedor() {
    alert("Selecciono " + this.nombre);
  }
  cantidadComedor() {
    alert("La cantidad de comensales es de " + this.cantidad);
  }
  ubicComedor() {
    alert("La Ubiacion es " + this.ubic);
  }
}

function ingreseNumComedor() {
  let numIngresado = prompt("Ingrese Numero de Comedor");
  return parseInt(numIngresado);
}
function plataDonada() {
  let plata = prompt("Cuanto desea donar");
  alert("Usted dono $" + plata);
  return parseInt(plata);
}
function menu() {
  let seleccionMenu = prompt(
    "Seleccione Menu\n 1:Donar plata\n 2:Cantidad Comensales\n 3:Ubicacion del Comedor\n 4:Registrar un nuevo comedor\n 5:Mostrar nombres Comedores\n 6:Total de Comensales\n 0:Salir"
  );
  return parseInt(seleccionMenu);
}
const comedor1 = new Comedor("El Gomero", 50, "Barrancas de Belgrano");
const comedor2 = new Comedor("Manitos", 30, "Parque Centenario");
const comedor3 = new Comedor("Doña Tota", 60, "Villa Fiorito");

let menuSeleccionado = "";
const comedores = [comedor1, comedor2, comedor3];

let botDon1 = document.getElementById("don1");
let botDon2 = document.getElementById("don2");
let botDon3 = document.getElementById("don3");

botDon2.innerHTML = "<h2>Gracias Por donar!</h2>";
/* // SELECCIONE MENU
while ((menuSeleccionado = menu()) != 0) {
  switch (menuSeleccionado) {
    case 1:
      //MENU DONAR PLATA
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          plataDonada();
          break;
        case 2:
          comedor2.nombreComedor();
          plataDonada();
          break;
        case 3:
          comedor3.nombreComedor();
          plataDonada();
          break;
        default:
          alert("Ingrese Numero del 1 al 3");
          break;
      }
      break;
    //MENU CANTIDAD DE COMENSALES
    case 2:
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          comedor1.cantidadComedor();
          break;
        case 2:
          comedor2.nombreComedor();
          comedor2.cantidadComedor();
          break;
        case 3:
          comedor3.nombreComedor();
          comedor3.cantidadComedor();
          break;
        default:
          alert("Ingrese Numero del 1 al 3");
          break;
      }
      break;
    //MENU UBICACION
    case 3:
      switch (ingreseNumComedor()) {
        case 1:
          comedor1.nombreComedor();
          comedor1.ubicComedor();
          break;
        case 2:
          comedor2.nombreComedor();
          comedor2.ubicComedor();
          break;
        case 3:
          comedor3.nombreComedor();
          comedor3.ubicComedor();
          break;
        default:
          alert("Ingrese Numero del 1 al 3");
          break;
      }
      break;

    //MENU REGISTRAR NUEVO COMEDOR
    case 4:
      comedores.push(
        new Comedor(
          prompt("Ingrese nombre comedor"),
          prompt("Ingrese Cantidad de Comensales"),
          prompt("Ingrese Barrio")
        )
      );
      alert("Ingresaste un nuevo comedor");
      break;

    //MENU MOSTRAR NOMBRE COMEDORES
    case 5:
      const nombresCom = comedores.map((el) => {
        return el.nombre;
      });
      alert(nombresCom);
      break;
    //MENU TOTAL DE COMENSALES
    case 6:
      const totalComedor = comedores.reduce((acc, item) => {
        alert("El comedor " + item.nombre + " " + "tiene " + item.cantidad + " " + "comensales");
        return (acc += item.cantidad);
      }, 0);

      alert("La cantidad total de comensales es de: " + totalComedor);
      break;
    default:
      alert("Menu incorrecto, vuelva a intentarlo");
      break;
  }
} */
