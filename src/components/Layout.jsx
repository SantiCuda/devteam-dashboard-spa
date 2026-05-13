import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../index.css'; // Aseguramos que carguen los estilos

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}