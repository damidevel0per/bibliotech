import "./LibroCard.css"; 

export default function LibroCard({ libro }) {
    return (
      <div style={styles.card}>
        <img
          src={libro.portada}
          alt={libro.nombre}
          style={styles.imagen}
        />
        <h4 className="card-title">{libro.nombre}</h4>
        <p><strong>Autor:</strong> {libro.autores.join(", ")}</p>
        <p><strong>Año de publicación:</strong> {libro.anioPublicacion}</p>
        <p><strong>Páginas:</strong> {libro.paginas}</p>
        {/*<p>Descripción: {libro.descripcion}</p>        */}
        {/*<p><strong>Categorías:</strong> {libro.categorias.join(", ")}</p>*/}
        
        <a
        href={libro.linkPdf}
        target="_blank"
        className="button-card"
        >
        Ver PDF 
        </a>
      </div>
    );
  }
  
  const styles = {
    card: {
      width: "300px",
      height: "auto",
      border: "1px solid var(--border)",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: "var(--accent-border);",
      color: "var(--text)",
      boxShadow: "var(--shadow)",
      display: "flex",
      flexDirection: "column",
    },
  
    imagen: {
      width: "300px",
      height: "370px",
      objectFit: "cover",
      marginBottom: "10px",
      borderRadius: "6px",
    },

  };