// Variable global para saber si el admin está autenticado
let isAdmin = false;

// Precios base (se sobrescriben al cargar desde backend)
const preciosCortinas = {
  blackout: 29,
  screen: 15,
  tradicional: 20
};

const preciosMontaje = {
  enrollable: 30,
  plegable: 20,
  riel: 13
};

// --- FUNCIONES PARA BACKEND ---
// Ahora estos métodos sólo usan los valores locales y no hacen llamadas de red:
async function cargarPrecios() {
  // No hacer nada, los precios ya están inicializados localmente
}

async function guardarPrecios() {
  // No hacer nada, ya no se guardan los cambios en el backend
}

// Función para marcar la pestaña activa en la barra de navegación
function setActiveTab(tab) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.dataset.tab === tab) {
      link.classList.add('active-tab');
    } else {
      link.classList.remove('active-tab');
    }
  });
}

// Botón de acceso admin arriba a la derecha
function renderAdminButton() {
  let btn = document.getElementById('admin-access-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'admin-access-btn';
    btn.textContent = 'Ingresar';
    btn.style.position = 'fixed';
    btn.style.top = '18px';
    btn.style.right = '32px';
    btn.style.zIndex = '1000';
    btn.style.background = '#222';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '7px';
    btn.style.padding = '0.5em 1.2em';
    btn.style.fontWeight = 'bold';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 2px 8px #0002';
    btn.onmouseover = () => btn.style.background = '#ffd700';
    btn.onmouseout = () => btn.style.background = '#222';
    btn.onclick = () => showAdminLogin();
    document.body.appendChild(btn);
  }
  // El botón solo se muestra si NO eres admin y NO estás en admin
  btn.style.display = (!isAdmin) ? '' : 'none';
}

// Ventana modal para clave admin
function showAdminLogin() {
  if (document.getElementById('admin-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'admin-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.25)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '2000';

  modal.innerHTML = `
    <div style="background:#fff; border-radius:12px; padding:2em 2.5em; box-shadow:0 8px 32px #0003; min-width:260px; text-align:center;">
      <h3>Acceso Admin</h3>
      <input type="password" id="adminClave" placeholder="Clave" style="padding:0.5em; border-radius:6px; border:1px solid #bbb; margin-bottom:1em; width:90%;">
      <br>
      <button id="adminLoginBtn" style="background:#222; color:#fff; border:none; border-radius:6px; padding:0.5em 1.2em; font-weight:bold; cursor:pointer;">Ingresar</button>
      <button id="adminCancelBtn" style="margin-left:1em; background:#bbb; color:#222; border:none; border-radius:6px; padding:0.5em 1.2em; font-weight:bold; cursor:pointer;">Cancelar</button>
      <div id="adminLoginMsg" style="margin-top:1em; color:red;"></div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('adminLoginBtn').onclick = function() {
    const clave = document.getElementById('adminClave').value;
    if (clave === 'cortinas2024') {
      isAdmin = true;
      document.body.removeChild(modal);
      showPage('admin');
    } else {
      document.getElementById('adminLoginMsg').textContent = 'Clave incorrecta';
    }
  };
  document.getElementById('adminCancelBtn').onclick = function() {
    document.body.removeChild(modal);
  };
}

// Renderiza el enlace de admin en el nav solo si eres admin
function renderAdminNavLink() {
  const adminNav = document.getElementById('admin-nav-link');
  if (isAdmin) {
    adminNav.innerHTML = `<a href="#" data-tab="admin" onclick="showPage('admin')">Admin</a>`;
  } else {
    adminNav.innerHTML = '';
  }
}

// Página principal y navegación útil
function showPage(page, cortinaSeleccionada = null) {
  setActiveTab(page);
  renderAdminButton();
  renderAdminNavLink();
  const container = document.getElementById('container');
  if (page === 'home') {
    container.innerHTML = `
      <div style="
        position:relative;
        min-height:100vh;
        width:100vw;
        overflow:hidden;
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <div style="
          position:absolute;
          top:0; left:0; width:100vw; height:100vh;
          z-index:0;
          background: url('https://interioristica.com/wp-content/uploads/2024/05/cortinas-para-una-ventana.jpg') center center / cover no-repeat;
          filter: brightness(0.7);
          background-attachment: fixed;
        " class="bienvenida-bg-mobile"></div>
        <div style="
          position:relative;
          z-index:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          min-height:100vh;
          width:100vw;
        ">
          <div style="
            background: rgba(255,255,255,0.82);
            border-radius: 24px;
            box-shadow: 0 8px 32px #b7cbe644;
            padding: 2.5em 2em 2em 2em;
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          ">
            <h2 style="color:#6d8a88; font-size:2.3em;">Bienvenido a Cortinas Premium</h2>
            <p style="font-size:1.15em; color:#444; max-width:600px; margin:auto;">
              Descubre nuestra exclusiva selección de cortinas y sistemas de montaje. Haz clic en <b>Catálogo</b> para ver los modelos y calcular tu presupuesto personalizado.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (page === 'catalog') {
    container.innerHTML = `
      <div style="
        max-width: 900px;
        margin: 2.5em auto 2em auto;
        padding: 2.5em 1.5em 2em 1.5em;
        background: rgba(255,255,255,0.92);
        border-radius: 28px;
        box-shadow: 0 8px 32px #b7cbe644, 0 1.5px 8px #b7cbe644;
        border: 1.5px solid #e0e7ef;
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        <h2 style="color:#6d8a88; font-family:'Playfair Display',serif; font-size:2.1em; margin-bottom:0.7em;">Catálogo</h2>
        <h3 style="color:#4b646f; margin-bottom:1.2em;">Precios por tipo de cortina (por m²):</h3>
        <div class="catalogo-cortinas">
          <div class="cortina-item" data-cortina="blackout" style="cursor:pointer;">
            <img src="https://sophiestore.pe/wp-content/uploads/2024/11/cortina-blackout-gris-2.jpg" alt="Cortina Black Out">
            <div style="font-size:1.3em; margin-top:0.5em;">Black Out<br><strong>$${preciosCortinas.blackout}</strong> por m²</div>
          </div>
          <div class="cortina-item" data-cortina="screen" style="cursor:pointer;">
            <img src="https://fabrics.cl/cdn/shop/products/screen3blancoactualizado.jpg?v=1646859587" alt="Cortina Screen">
            <div style="font-size:1.3em; margin-top:0.5em;">Screen<br><strong>$${preciosCortinas.screen}</strong> por m²</div>
          </div>
          <div class="cortina-item" data-cortina="tradicional" style="cursor:pointer;">
            <img src="https://www.cortinatecnica.com/sites/default/files/styles/large_retina/public/portfolio/cortina_tradicional.jpeg?itok=9VnwzfHo" alt="Cortina Tradicional">
            <div style="font-size:1.3em; margin-top:0.5em;">Tradicional<br><strong>$${preciosCortinas.tradicional}</strong> por m²</div>
          </div>
        </div>
        <div style="
          margin-top:2.5em;
          background: linear-gradient(120deg, #f5f7fa 60%, #eaf1f7 100%);
          border-radius: 18px;
          box-shadow: 0 4px 18px #b7cbe633;
          border: 1.5px solid #b7cbe6;
          padding: 2em 1.5em 1.5em 1.5em;
          max-width: 420px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        ">
          <h3 style="color:#6d8a88; margin-bottom:1em;">Precios por sistema de montaje (por metro lineal):</h3>
          <ul style="list-style:none; padding:0; margin:0; width:100%;">
            <li style="
              background: #fff;
              border-radius: 10px;
              margin-bottom: 0.7em;
              padding: 0.8em 1em;
              font-size: 1.13em;
              color: #4b646f;
              box-shadow: 0 1px 6px #b7cbe622;
              border: 1px solid #e0e7ef;
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
              <span>Enrollables</span> <strong>$${preciosMontaje.enrollable}</strong> <span style="font-size:0.95em; color:#6d8a88;">/ metro</span>
            </li>
            <li style="
              background: #fff;
              border-radius: 10px;
              margin-bottom: 0.7em;
              padding: 0.8em 1em;
              font-size: 1.13em;
              color: #4b646f;
              box-shadow: 0 1px 6px #b7cbe622;
              border: 1px solid #e0e7ef;
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
              <span>Plegables</span> <strong>$${preciosMontaje.plegable}</strong> <span style="font-size:0.95em; color:#6d8a88;">/ metro</span>
            </li>
            <li style="
              background: #fff;
              border-radius: 10px;
              margin-bottom: 0.7em;
              padding: 0.8em 1em;
              font-size: 1.13em;
              color: #4b646f;
              box-shadow: 0 1px 6px #b7cbe622;
              border: 1px solid #e0e7ef;
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
              <span>Rieles tradicionales</span> <strong>$${preciosMontaje.riel}</strong> <span style="font-size:0.95em; color:#6d8a88;">/ metro</span>
            </li>
          </ul>
        </div>
      </div>
    `;
    // Solo desde el catálogo puedes acceder a la calculadora
    document.querySelectorAll('.cortina-item').forEach(item => {
      item.onclick = function () {
        showPage('calculator', this.dataset.cortina);
      };
    });
  } else if (page === 'calculator' && cortinaSeleccionada) {
    let nombreCortina = '';
    if (cortinaSeleccionada === 'blackout') nombreCortina = 'Black Out';
    else if (cortinaSeleccionada === 'screen') nombreCortina = 'Screen';
    else if (cortinaSeleccionada === 'tradicional') nombreCortina = 'Tradicional';

    container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:60vh;">
        <h2 style="text-align:center;">Calculadora de Presupuesto</h2>
        <form id="calcForm" style="max-width:350px; margin:auto; display:flex; flex-direction:column; align-items:center; gap:0.7em;">
          <input type="hidden" id="tipoCortina" value="${cortinaSeleccionada}">
          <div style="font-weight:bold;margin-bottom:0.5em; text-align:center;">Tipo de cortina: ${nombreCortina}</div>
          <label style="width:100%; text-align:left;">Sistema de montaje:
            <select id="sistemaMontaje" required style="width:100%; margin-top:0.2em;">
              <option value="">Seleccione</option>
              <option value="enrollable">Enrollables</option>
              <option value="plegable">Plegables</option>
              <option value="riel">Rieles tradicionales</option>
            </select>
          </label>
          <label style="width:100%; text-align:left;">Ancho (m):
            <input type="number" id="ancho" min="0.01" step="0.01" required style="width:100%; margin-top:0.2em;">
          </label>
          <label style="width:100%; text-align:left;">Alto (m):
            <input type="number" id="alto" min="0.01" step="0.01" required style="width:100%; margin-top:0.2em;">
          </label>
          <button type="submit" style="margin-top:0.7em;">Calcular presupuesto</button>
        </form>
        <div id="resultadoPresupuesto" style="margin-top:1em; text-align:center;"></div>
        <button id="volverCatalogoBtn" style="margin-top:2em;background:#bbb;color:#222;border:none;border-radius:6px;padding:0.5em 1.2em;font-weight:bold;cursor:pointer;">Volver al catálogo</button>
      </div>
    `;

    document.getElementById('calcForm').onsubmit = function(e) {
      e.preventDefault();
      calcularPresupuesto();
    };
    document.getElementById('volverCatalogoBtn').onclick = function() {
      showPage('catalog');
    };
  } else if (page === 'admin') {
    const btn = document.getElementById('admin-access-btn');
    if (btn) btn.style.display = 'none';

    if (!isAdmin) {
      showPage('home');
      return;
    }

    container.innerHTML = `
      <h2>Admin</h2>
      <form id="adminForm">
        <h3>Precios de Cortinas (por m²)</h3>
        <label>Black Out: $<input type="number" id="precioBlackout" value="${preciosCortinas.blackout}" min="0"></label><br>
        <label>Screen: $<input type="number" id="precioScreen" value="${preciosCortinas.screen}" min="0"></label><br>
        <label>Tradicional: $<input type="number" id="precioTradicional" value="${preciosCortinas.tradicional}" min="0"></label><br><br>
        <h3>Precios de Sistemas de Montaje (por metro lineal)</h3>
        <label>Enrollables: $<input type="number" id="precioEnrollable" value="${preciosMontaje.enrollable}" min="0"></label><br>
        <label>Plegables: $<input type="number" id="precioPlegable" value="${preciosMontaje.plegable}" min="0"></label><br>
        <label>Rieles tradicionales: $<input type="number" id="precioRiel" value="${preciosMontaje.riel}" min="0"></label><br><br>
        <button type="submit">Guardar precios</button>
      </form>
      <div id="adminMsg" style="margin-top:1em;"></div>
      <button id="adminSalirBtn" style="margin-top:2em;background:#bbb;color:#222;border:none;border-radius:6px;padding:0.5em 1.2em;font-weight:bold;cursor:pointer;">Salir</button>
    `;

    document.getElementById('adminForm').onsubmit = async function(e) {
      e.preventDefault();
      preciosCortinas.blackout = parseInt(document.getElementById('precioBlackout').value) || 0;
      preciosCortinas.screen = parseInt(document.getElementById('precioScreen').value) || 0;
      preciosCortinas.tradicional = parseInt(document.getElementById('precioTradicional').value) || 0;
      preciosMontaje.enrollable = parseInt(document.getElementById('precioEnrollable').value) || 0;
      preciosMontaje.plegable = parseInt(document.getElementById('precioPlegable').value) || 0;
      preciosMontaje.riel = parseInt(document.getElementById('precioRiel').value) || 0;
      await guardarPrecios();
      document.getElementById('adminMsg').innerHTML = '<span style="color:green;">¡Precios actualizados!</span>';
      // Refresca valores en el catálogo por si el admin vuelve
      await cargarPrecios();
    };

    document.getElementById('adminSalirBtn').onclick = function() {
      isAdmin = false;
      showPage('home');
    };
  }
}

function calcularPresupuesto() {
  const tipoCortina = document.getElementById('tipoCortina').value;
  const sistemaMontaje = document.getElementById('sistemaMontaje').value;
  const ancho = parseFloat(document.getElementById('ancho').value);
  const alto = parseFloat(document.getElementById('alto').value);
  const resultado = document.getElementById('resultadoPresupuesto');

  if (!tipoCortina || !sistemaMontaje || !ancho || !alto) {
    resultado.innerHTML = '<span style="color:red;">Complete todos los campos.</span>';
    return;
  }

  const area = ancho * alto; // m²
  const metrosLineales = ancho; // Se asume el sistema va en el ancho

  const precioCortina = preciosCortinas[tipoCortina] * area;
  const precioMontaje = preciosMontaje[sistemaMontaje] * metrosLineales;
  const total = precioCortina + precioMontaje;

  resultado.innerHTML = `
    <strong>Presupuesto estimado:</strong><br>
    Cortina (${area.toFixed(2)} m²): $${precioCortina.toFixed(2)}<br>
    Sistema de montaje (${metrosLineales.toFixed(2)} m): $${precioMontaje.toFixed(2)}<br>
    <hr>
    <strong>Total: $${total.toFixed(2)}</strong>
  `;
}

// Mostrar la página de inicio por defecto y el botón admin
window.onload = async () => {
  await cargarPrecios();
  showPage('home');
  renderAdminButton();
  renderAdminNavLink();
};