import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'}
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && <button type="button" className="sidebar-backdrop" onClick={closeMenu} aria-label="Cerrar menu" />}

      <aside id="main-sidebar" className={`sidebar ${isOpen ? 'is-open' : ''}`}>
        {/* Reemplazar con <img src="/tu-logo.png" alt="Logo" /> si tienen imagen */}
        <div className="logo-container">
          <h2>Dev<span>Team</span></h2>
        </div>
        
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/explorador" className="nav-link" onClick={closeMenu}>Buscador JSON</Link>
          </li>
          <li className="nav-item">
            <Link to="/api" className="nav-link" onClick={closeMenu}>Integración API</Link>
          </li>
          <li className="nav-item">
            <Link to="/galeria" className="nav-link" onClick={closeMenu}>Galería de Imágenes</Link>
          </li>
          <li className="nav-item">
            <Link to="/bitacora" className="nav-link" onClick={closeMenu}>Bitácora</Link>
          </li>
          <li className="nav-item">
            <Link to="/arbol" className="nav-link" onClick={closeMenu}>Árbol de Componentes</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}