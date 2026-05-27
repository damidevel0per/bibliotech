const API_URL = "http://localhost:3001/libros";

export const getLibros = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Error al obtener los libros");
  }
  return res.json();
};