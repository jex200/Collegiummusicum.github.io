
function handleMailto(e){
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const interes = document.getElementById('interes').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const subject = encodeURIComponent('Solicitud de información');
  const body = encodeURIComponent(
    `Hola, soy ${nombre}.\n\nInterés: ${interes}\nTel: ${telefono}\n\n${mensaje}`
  );
  const mail = document.querySelector('form').getAttribute('action').replace('mailto:', '');
  window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  e.preventDefault();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const wsBtn = document.getElementById('ws-btn');
  const nombre = document.getElementById('nombre');
  const interes = document.getElementById('interes');
  const telefono = document.getElementById('telefono');

  function updateWs(){
    const t = encodeURIComponent(`Hola, soy ${nombre.value || '—'}.
Interés: ${interes.value}.
Tel: ${telefono.value || '—'}.`);
    const base = wsBtn.getAttribute('href').split('?')[0];
    wsBtn.setAttribute('href', `${base}?text=${t}`);
  }
  [nombre, interes, telefono].forEach(el => el.addEventListener('input', updateWs));
  updateWs();
});
