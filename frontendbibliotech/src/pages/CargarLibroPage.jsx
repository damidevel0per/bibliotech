import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import './CargarLibroPage.css';

function CargarLibroPage() {
  return (    <>
    <HeaderComponent>
    </HeaderComponent>
    <div>
      <h2>Agrega un nuevo libro a la biblioteca</h2>
      <br />
      <div className="cargar-libro-form">
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input placeholder='Clean code' type="text" id="titulo" name="titulo" required />
          </div>
          <div className="form-group">
            <label htmlFor="autor">Autor:</label>
            <input placeholder='Robert C. Martin' type="text" id="autor" name="autor" required />
          </div>
          <div className="form-group">
            <label htmlFor="publicación">Año de publicación:</label>
            <input placeholder='2005' type="number" id="publicacion" name="publicacion" required />
          </div>
          <div className="form-group">
            <label htmlFor="paginas">Cantidad de páginas:</label>
            <input placeholder='464' type="number" id="paginas" name="paginas" required />
          </div>
          <div className="form-group">
            <label htmlFor="idioma">Idioma:</label>
            <input placeholder='Ingles' type="text" id="idioma" name="idioma" required />
          </div>
          <div className="form-group">
            <label htmlFor="portada">Link de la portada:</label>
            <input placeholder='https://imagenesdelibros.com//360x360/imagen-cleand-code.jpg' type="text" id="portada" name="portada" required />
          </div>
          <div className="form-group">
            <label htmlFor="libro">Link del libro:</label>
            <input type="text" id="libro" name="libro" required />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripcion:</label>
            <input placeholder='Libro que se enfoca en el desarrollo de software que prioriza la legibilidad, claridad y mantenibilidad del código' type="text" id="descripcion" name="descripcion" required />
          </div>
          <button type="submit">Cargar Libro</button>
        </form>
    </div>
    </div>
    <FooterComponent/>
    </> 
  );
}

export default CargarLibroPage;