import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeaderComponent />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Descubrí, leé y aprendé <span>sin límites</span>
          </h1>

          <p>
            Bibliotech es tu biblioteca digital: libros técnicos, académicos
            y de aprendizaje en un solo lugar.
          </p>

          <div className="hero-buttons">
            <a href="/libros" className="btn-primary">
              Explorar libros
            </a>
            <a href="#about" className="btn-secondary">
              Saber más
            </a>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default HomePage;