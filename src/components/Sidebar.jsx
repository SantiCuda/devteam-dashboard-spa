import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dev<span>Team</span></h2>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/bitacora" className="nav-link">Bitácora</Link>
        </li>
      </ul>
    </aside>
  );
}