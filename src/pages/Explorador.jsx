import { useState } from 'react';
import datos from '../datos.json'; // Importamos el JSON local

export default function Explorador() {
  // Estado para capturar lo que el usuario escribe
  const [busqueda, setBusqueda] = useState('');

  // Lógica de filtrado dinámico (busca por nombre o categoría)
  const resultadosFiltrados = datos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="fade-in">
      <h2 className="section-title">Buscador de Tecnologías (JSON)</h2>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Buscar por nombre o categoría (ej. Frontend)..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="grid-container">
        {resultadosFiltrados.map((item) => (
          <div key={item.id} className="card-panel">
            <h3>{item.nombre}</h3>
            <span className="accent-text">{item.categoria}</span>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}