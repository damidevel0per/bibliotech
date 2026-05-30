import React, { useState } from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import './CargarLibroPage.css';

function CargarLibroPage() {
    const [portadaUrl, setPortadaUrl] = useState("");

    const [libro, setLibro] = useState({
        nombre: "",
        autores: [],
        categorias: [],
        anioPublicacion: "",
        paginas: "",
        descripcion: "",
        idioma: "",
        portada: "",
        linkPdf: "",
        formato: "PDF"
    });

    const handleChange = (e) => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const libroParaEnviar = {
            ...libro,
            autores: [libro.autores]
        };
        
        console.log(libroParaEnviar);

        try {
            const response = await fetch("http://localhost:3001/libros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(libroParaEnviar)
            });

            if (!response.ok) {
                throw new Error("Error al guardar el libro");
            }

            const data = await response.json();

            console.log("Libro guardado:", data);
            alert("Libro cargado correctamente");
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error");
        }
    };



    return (<>
        <HeaderComponent>
        </HeaderComponent>
        <div>
            <h2>Agrega un nuevo libro a la biblioteca</h2>
            <br />
            <div className="cargar-libro-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Título:</label>
                        <input
                            placeholder='Clean code'
                            value={libro.nombre}
                            onChange={handleChange}
                            type="text"
                            id="nombre"
                            name="nombre"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="autor">Autor:</label>
                        <input
                            placeholder='Robert C. Martin'
                            name="autores"
                            value={libro.autores}
                            onChange={handleChange}
                            type="text"
                            id="autor"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publicación">Año de publicación:</label>
                        <input placeholder='2005'
                            name="anioPublicacion"
                            value={libro.anioPublicacion}
                            onChange={handleChange}
                            type="number"
                            id="publicacion"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paginas">Cantidad de páginas:</label>
                        <input placeholder='464'
                            value={libro.paginas}
                            onChange={handleChange}
                            type="number"
                            id="paginas"
                            name="paginas"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idioma">Idioma:</label>
                        <input placeholder='Ingles'
                            value={libro.idioma}
                            onChange={handleChange}
                            type="text"
                            id="idioma"
                            name="idioma"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="libro">Link del libro:</label>
                        <input type="text"
                            value={libro.linkPdf}
                            onChange={handleChange}
                            id="libro"
                            name="linkPdf"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripcion:</label>
                        <textarea
                            rows="4"
                            value={libro.descripcion}
                            onChange={handleChange}
                            id="descripcion"
                            name="descripcion"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="portada">Link de la portada:</label>
                        <input
                            type="text"
                            id="portada"
                            name="portada"
                            placeholder="https://..."
                            value={libro.portada}
                            onChange={(e) => {
                                setPortadaUrl(e.target.value);

                                setLibro({
                                    ...libro,
                                    portada: e.target.value
                                });
                            }}

                        />
                        {portadaUrl && (
                            <div className="portada-preview">
                                <img
                                    src={portadaUrl}
                                    alt="Vista previa de la portada"
                                    onError={(e) => (e.target.style.display = "none")}
                                />
                            </div>
                        )}
                    </div>

                    <button type="submit">Cargar Libro</button>
                </form>
            </div>
        </div>
        <FooterComponent />
    </>
    );
}

export default CargarLibroPage;