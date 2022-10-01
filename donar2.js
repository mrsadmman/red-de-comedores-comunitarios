let carrito = [];
const divisa = ' Vianda';
const comensa = ' Comensales';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
  fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Comensales
        const miNodoComensales = document.createElement('p');
        miNodoComensales.classList.add('card-text');
        miNodoComensales.textContent = `${info.comensales}${comensa}`;
        // Ubicacion
        const miNodoUbicacion = document.createElement('h6');
        miNodoUbicacion.classList.add('card-text');
        miNodoUbicacion.textContent = `${info.ubicacion}`;
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoComensales);
        miNodoCardBody.appendChild(miNodoUbicacion);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
renderizarProductos();

function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'));
  // Actualizamos el carrito
  renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
  fetch('data.json')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((info) => {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
          // Obtenemos el item que necesitamos de la variable base de datos
          const miItem = json.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
          });
          // Cuenta el número de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? (total += 1) : total;
          }, 0);
          // Creamos el nodo del item del carrito
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-5');
          miBoton.textContent = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          // Mezclamos nodos
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        calcularTotal().then((total) => {
          DOMtotal.textContent = total;
        });
      });
    });
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
async function calcularTotal() {
  let res = await fetch('data.json');
  let json = await res.json();

  // Recorremos el array del carrito
  return carrito.reduce((total, item) => {
    // De cada elemento obtenemos su precio
    const miItem = json.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    // Los sumamos al total
    return total + miItem[0].precio;
  }, 0);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarCarrito();
/* AGREGO UN SWEET ALERT */
Swal.fire({
  title: 'Vianda',
  text: 'Cuando hablamos de vianda, estamos hablando de la compra de un monton de insumos para poder producirlas (Arroz, Salsa, Carne, Condimentos). Este monto puede verse afectado por el tan conocido efecto de INFLACION. El calculo de hoy es de $200 cada vianda',
  icon: 'info',
  confirmButtonText: 'Excelente!',
});
