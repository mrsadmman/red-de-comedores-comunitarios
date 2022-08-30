const baseDeDatos = [
  {
    id: 1,
    nombre: 'El Gomero',
    precio: 1,
    ubicacion: 'Barrancas de Belgrano',
    comensales: 50,
    imagen: './images/logos/elgomero.jpg',
  },
  {
    id: 2,
    nombre: 'CCC',
    precio: 1,
    comensales: 70,
    ubicacion: 'Barrio Mitre',
    imagen: './images/logos/ccc.jpg',
  },
  {
    id: 3,
    nombre: 'La Poderosa Fatima',
    precio: 1,
    ubicacion: 'Villa Fatima',
    comensales: 90,

    imagen: './images/logos/lapoderosa.png',
  },
  {
    id: 4,
    nombre: 'Don Segundo Sombra',
    precio: 1,
    comensales: 60,
    ubicacion: 'Parque Patricios',
    imagen: './images/logos/donsegundosombra.jpg',
  },
  {
    id: 5,
    nombre: 'Amanecer de Los Cartoneros',
    precio: 1,
    comensales: 120,
    ubicacion: 'Parque Patricios',
    imagen: './images/logos/cartoneros.jpg',
  },
  {
    id: 6,
    nombre: 'Pelusa',
    precio: 1,
    comensales: 100,
    ubicacion: 'La Carbonilla',
    imagen: './images/logos/pelusa.jpg',
  },
];

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
  baseDeDatos.forEach((info) => {
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
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
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
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
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
  DOMtotal.textContent = calcularTotal();
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
function calcularTotal() {
  // Recorremos el array del carrito
  return carrito.reduce((total, item) => {
    // De cada elemento obtenemos su precio
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
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
renderizarProductos();
renderizarCarrito();
