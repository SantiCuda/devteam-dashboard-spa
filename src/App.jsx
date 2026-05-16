import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bitacora from './pages/Bitacora';
import Perfil from './pages/Perfil';
import Explorador from './pages/Explorador';
import Api from './pages/Api';
import Galeria from './pages/Galeria';
import Arbol from './pages/Arbol';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Ruta dinámica para las tarjetas de perfil */}
          <Route path="perfil/:id" element={<Perfil />} />
          <Route path="explorador" element={<Explorador />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="api" element={<Api />} />
          {/* Rutas pendientes para que los enlaces no den error 404 */}
          <Route path="galeria" element={<Galeria />} />
          <Route path="arbol" element={<Arbol />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;