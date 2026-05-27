import { useEffect, useState } from "react";
import { getLibros } from "../services/librosService";
import LibroCard from "../components/LibroCard";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function Libros() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getLibros()
      .then(data => {
        setLibros(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando libros...</p>;

  return (
    <>
    <HeaderComponent/>
    <div style={styles.container}>
      {libros.map(libro => (
        <LibroCard key={libro._id} libro={libro} />
      ))}
    </div>
    <FooterComponent/>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }
};