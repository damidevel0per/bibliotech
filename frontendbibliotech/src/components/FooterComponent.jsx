import "./FooterComponent.css";

function FooterComponent() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Bibliotech</h3>
            <p>Tu biblioteca digital de confianza.</p>
          </div>
  
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/libros">Libros</a></li>
              <li><a href="#">Acerca de</a></li>
            </ul>
          </div>
  
          <div className="footer-links">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:contacto@bibliotech.com">Email</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bibliotech</p>
        </div>
      </footer>
    );
  }
  
  export default FooterComponent;