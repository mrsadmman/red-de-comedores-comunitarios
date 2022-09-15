const btn = document.getElementById('btnGuardar');

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Enviando';

  const serviceID = 'default_service';
  const templateID = 'template_sn4frj3';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Enviar';
      alert('Tu mail fue enviado');
    },
    (err) => {
      btn.value = 'ERROR';
      alert(JSON.stringify(err));
    }
  );
});
