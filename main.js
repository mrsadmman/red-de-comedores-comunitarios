class Comedor {
  constructor(nombre, cantidad, ubic) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = parseInt(cantidad);
    this.ubic = ubic;
  }
  nombreComedor() {
    alert('Selecciono ' + this.nombre);
  }
  cantidadComedor() {
    alert('La cantidad de comensales es de ' + this.cantidad);
  }
  ubicComedor() {
    alert('La Ubiacion es ' + this.ubic);
  }
}
const comedor1 = new Comedor('El Gomero', 50, 'Barrancas de Belgrano');
const comedor2 = new Comedor('Manitos', 30, 'Parque Centenario');
const comedor3 = new Comedor('Doña Tota', 60, 'Villa Fiorito');

function ingreseNumComedor() {
  let numIngresado = prompt('Ingrese Numero de Comedor');
  return parseInt(numIngresado);
}
function plataDonada() {
  let plata = prompt('Cuanto desea donar');
  alert('Usted dono $' + plata);
  return parseInt(plata);
}
function menu() {
  let seleccionMenu = prompt('Seleccione Menu 1:Donar plata 2:Cantidad Comensales 3:Ubicacion del Comedor');
  return parseInt(seleccionMenu);
}
let menuSeleccionado = '';
// SELECCIONE MENU
while ((menuSeleccionado = menu()) != 'ESC') {
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
          alert('Ingrese Numero del 1 al 3');
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
          alert('Ingrese Numero del 1 al 3');
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
          alert('Ingrese Numero del 1 al 3');
          break;
      }
      break;
    default:
      alert('Menu incorrecto, vuelva a intentarlo');
      break;
  }
  break;
}
