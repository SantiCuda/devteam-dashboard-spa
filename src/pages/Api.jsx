import { useState, useEffect } from 'react';

export default function Api() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados para la paginación
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        // Consumo asíncrono de la API pública de GitHub (Buscando Devs de JavaScript)
        const response = await fetch(`https://api.github.com/search/users?q=language:javascript&per_page=10&page=${page}`);
        
        // GitHub limita las peticiones rápidas, así que atajamos ese error específico
        if (response.status === 403) throw new Error('Límite de peticiones alcanzado. Espera un minuto.');
        if (!response.ok) throw new Error(`Error de conexión HTTP: ${response.status}`);
        
        const data = await response.json();
        setUsers(data.items);
        // GitHub permite ver hasta 1000 resultados, así que limitamos las páginas a 100
        setTotalPages(Math.min(Math.ceil(data.total_count / 10), 100));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]); // Se vuelve a ejecutar cada vez que cambia la página

  return (
    <section className="fade-in">
      <h2 className="section-title">Desarrolladores JS (GitHub API)</h2>

      {/* Manejo de estados: Cargando y Error */}
      {loading && <div className="card-panel">Cargando usuarios... ⏳</div>}
      {error && <div className="card-panel" style={{ color: '#ef4444' }}>Error: {error}</div>}

      {/* Renderizado de Datos */}
      {!loading && !error && (
        <>
          <div className="grid-container">
            {users.map(user => (
              <div key={user.id} className="member-card">
                <div className="card-img-wrapper">
                  <img src={user.avatar_url} alt={user.login} />
                </div>
                <div className="card-info">
                  <h3>{user.login}</h3>
                  <p>Tipo: {user.type}</p>
                  <a href={user.html_url} target="_blank" rel="noreferrer" style={{color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', marginTop: '10px', display: 'block'}}>Ver en GitHub</a>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="pagination-container card-panel mt-2">
            <button className="carousel-btn" onClick={() => setPage(page - 1)} disabled={page === 1} style={{ opacity: page === 1 ? 0.5 : 1 }}>⬅ Anterior</button>
            <span>Página {page} de {totalPages}</span>
            <button className="carousel-btn" onClick={() => setPage(page + 1)} disabled={page === totalPages} style={{ opacity: page === totalPages ? 0.5 : 1 }}>Siguiente ➡</button>
          </div>
        </>
      )}
    </section>
  );
}