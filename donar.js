/* DONAR $$ */
let comedores = [
  {
    id: 0,
    name: 'El Gomero',
    amount: '50',
    location: 'Barrancas de Belgrano',
    img: './images/logos/elgomero.jpg',
  },
  { id: 1, name: 'CCC', amount: '80', location: 'Barrio Mitre', img: './images/logos/ccc.jpg' },
  {
    id: 2,
    name: 'La Poderosa Fatima',
    amount: '100',
    location: 'Barrio Fatima',
    img: './images/logos/lapoderosa.png',
  },
];
let donaciones = [];

function renderComedores() {
  let html = '';
  for (let i = 0; i < comedores.length; i++) {
    html =
      html +
      `<div class="row row-cols-1 row-cols-xl-3 g-4">
        <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${comedores[i].img}" class="card-img-top" style="width:288px;height:200px;"/>
                        <div class="card-body">
                                <div onclick="addToDonaciones(${comedores[i].id});">
                                    <h5 class="card-title">${comedores[i].name}</h5>
                                    <p class="card-text">${comedores[i].amount}</p>
                                    <p class="card-text">${comedores[i].location}</p>
                                </div>
                        </div>
                </div>
                
            </div>
        </div>
    `;
  }
  document.getElementById('div-comedores').innerHTML = html;
}

function renderDonaciones() {
  if (donaciones.length == 0) {
    document.getElementById('div-donaciones').innerHTML = '<h3>NO HAY NADA EN EL CARRO</h3>';
  } else {
    let html = '';
    for (let i = 0; i < donaciones.length; i++) {
      html =
        html +
        `
            <div class="card" style="width: 18rem;">
                <img src="${donaciones[i].img}" class="card-img-top" style="width:288px;height:200px;"/>
                <div class="card-body">
                    <h5 class="card-title">${donaciones[i].name}</h5>
                    <p class="card-text">${donaciones[i].amount}</p>
                    <p class="card-text">${donaciones[i].location}</p>
                    <span style="cursor:pointer;" onclick="removeFromDonaciones(${i});">🛒</span>
                </div>
            </div>
      `;
    }
    document.getElementById('div-donaciones').innerHTML = html;
  }
}

function addToDonaciones(id) {
  const foundComedor = comedores.find((item) => item.id == id);
  donaciones.push(foundComedor);
  renderDonaciones();
}

function removeFromDonaciones(id) {
  donaciones.splice(id, 1);
  renderDonaciones();
}

renderComedores();
