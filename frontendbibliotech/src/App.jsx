import {Route, Routes} from 'react-router-dom'
import './App.css'
import Libros from './pages/Libros'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/libros" element={<Libros />} /> 
      <Route path="/nosotros" element={<AboutPage />} /> 
    </Routes>

  );
}
export default App
