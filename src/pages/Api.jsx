import { useState, useEffect } from 'react';

const PER_PAGE = 12;

function SkeletonCard() {
  return (
    <div className="api-card api-card--skeleton">
      <div className="api-skeleton api-skeleton--avatar" />
      <div className="api-skeleton api-skeleton--line api-skeleton--wide" />
      <div className="api-skeleton api-skeleton--line api-skeleton--narrow" />
    </div>
  );
}

export default function Api() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=language:javascript&per_page=${PER_PAGE}&page=${page}`
        );
        if (response.status === 403) throw new Error('Límite de peticiones alcanzado. Espera un minuto.');
        if (!response.ok) throw new Error(`Error de conexión HTTP: ${response.status}`);
        const data = await response.json();
        setUsers(data.items);
        setTotalPages(Math.min(Math.ceil(data.total_count / PER_PAGE), 100));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };
    fetchUsers();
  }, [page]);

  return (
    <section className="fade-in">
      <h2 className="section-title">Desarrolladores JS (GitHub API)</h2>

      {initialLoad && loading && (
        <div className="card-panel">Cargando usuarios... ⏳</div>
      )}

      {error && (
        <div className="card-panel" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.08)', marginBottom: '1.5rem' }}>
          Error: {error}
        </div>
      )}

      {!initialLoad && (
        <>
          <div className="api-grid">
            {loading
              ? Array.from({ length: PER_PAGE }).map((_, i) => <SkeletonCard key={i} />)
              : users.map(user => (
                  <a
                    key={user.id}
                    className="api-card"
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={user.avatar_url} alt={user.login} className="api-avatar" />
                    <span className="api-login">{user.login}</span>
                    <span className="api-type">{user.type}</span>
                  </a>
                ))
            }
          </div>

          <div className="pagination-container card-panel mt-2">
            <button
              className="carousel-btn"
              onClick={() => setPage(p => p - 1)}
              disabled={page === 1}
              style={{ opacity: page === 1 ? 0.5 : 1 }}
            >
              ⬅ Anterior
            </button>
            <span>Página {page} de {totalPages}</span>
            <button
              className="carousel-btn"
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages}
              style={{ opacity: page === totalPages ? 0.5 : 1 }}
            >
              Siguiente ➡
            </button>
          </div>
        </>
      )}
    </section>
  );
}
