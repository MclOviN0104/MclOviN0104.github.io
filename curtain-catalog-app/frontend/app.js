function showPage(page) {
  const container = document.getElementById('container');
  if (page === 'home') {
    container.innerHTML = '<h2>Bienvenido al catálogo de cortinas</h2>';
  } else if (page === 'catalog') {
    container.innerHTML = '<h2>Catálogo</h2><p>Aquí va el catálogo de productos.</p>';
  } else if (page === 'calculator') {
    container.innerHTML = '<h2>Calculadora</h2><p>Aquí va la calculadora.</p>';
  } else if (page === 'admin') {
    container.innerHTML = '<h2>Admin</h2><p>Panel de administración.</p>';
  }
}

// Mostrar la página de inicio por defecto
window.onload = () => showPage('home');