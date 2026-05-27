import {Route, Routes} from 'react-router-dom'
import './App.css'
import Libros from './pages/Libros'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/libros" element={<Libros />} /> 
    </Routes>

  );
}
export default App
