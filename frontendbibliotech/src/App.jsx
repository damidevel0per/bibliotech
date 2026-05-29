import {Route, Routes} from 'react-router-dom'
import './App.css'
import Libros from './pages/Libros'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CargarLibroPage from './pages/CargarLibroPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/libros" element={<Libros />} /> 
      <Route path="/nosotros" element={<AboutPage />} /> 
      <Route path="/carga-libro" element={<CargarLibroPage />} /> 
    </Routes>

  );
}
export default App
