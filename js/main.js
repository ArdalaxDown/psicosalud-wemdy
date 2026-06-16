// Inyectar Header y Footer en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Header
  const headerHTML = `
    <header>
      <div class="header-container">
        <div class="logo">
          <a href="index.html">
            Psicosalud
            <span>WEMDY FUENTES</span>
          </a>
        </div>
        <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
        <nav>
          <ul id="nav-menu">
            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Inicio</a></li>
            <li><a href="sobre-mi.html" class="${currentPage === 'sobre-mi.html' ? 'active' : ''}">Sobre Mí</a></li>
            <li><a href="servicios.html" class="${currentPage === 'servicios.html' ? 'active' : ''}">Servicios</a></li>
            <li><a href="blog.html" class="${currentPage === 'blog.html' ? 'active' : ''}">Blog</a></li>
            <li><a href="contacto.html" class="${currentPage === 'contacto.html' ? 'active' : ''}">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
  
  // Footer
  const footerHTML = `
    <footer>
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Psicosalud Wemdy Fuentes</h3>
          <p>Psicóloga Psicoterapeuta en Lima, Perú.<br>
          Un lugar para ti y tus emociones.</p>
          <div class="social-links">
            <a href="https://www.instagram.com/psicosalud.wemdyfuentes" target="_blank" title="Instagram">📷</a>
            <a href="https://wa.me/51972031179" target="_blank" title="WhatsApp">💬</a>
            <a href="mailto:contacto@psicosaludwemdy.com" title="Email">✉️</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Enlaces</h4>
          <a href="index.html">Inicio</a>
          <a href="sobre-mi.html">Sobre Mí</a>
          <a href="servicios.html">Servicios</a>
          <a href="blog.html">Blog</a>
          <a href="contacto.html">Contacto</a>
        </div>
        <div class="footer-links">
          <h4>Contacto</h4>
          <a href="tel:+51972031179">📱 972 031 179</a>
          <p style="color:#B8B8D1; margin-top:0.5rem;">Lima, Perú</p>
          <p style="color:#B8B8D1; font-size:0.85rem;">Sesiones virtuales y presenciales bajo consulta</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Psicosalud Wemdy Fuentes. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
  
  // Insertar
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});

// Menú móvil
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Cerrar menú al hacer click en un link (mobile)
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) {
    document.getElementById('nav-menu')?.classList.remove('active');
  }
});