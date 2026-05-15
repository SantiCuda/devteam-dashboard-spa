import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Reemplazar con <img src="/tu-logo.png" alt="Logo" /> si tienen imagen */}
      <div className="logo-container">
        <h2>Dev<span>Team</span></h2>
      </div>
      
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/explorador" className="nav-link">Buscador JSON</Link>
        </li>
        <li className="nav-item">
          <Link to="/api" className="nav-link">Integración API</Link>
        </li>
        <li className="nav-item">
          <Link to="/galeria" className="nav-link">Galería de Imágenes</Link>
        </li>
        <li className="nav-item">
          <Link to="/bitacora" className="nav-link">Bitácora</Link>
        </li>
        <li className="nav-item">
          <Link to="/arbol" className="nav-link">Árbol de Componentes</Link>
        </li>
      </ul>
    </aside>
  );
}