export default function Arbol() {
  return (
    <section className="fade-in">
      <h2 className="section-title">Arquitectura de Componentes</h2>
      
      <div className="card-panel">
        <p style={{ marginBottom: '20px', color: 'var(--text-dim)' }}>
          Representación jerárquica del árbol de renderizado de la aplicación (SPA).
        </p>
        
        <div className="tree-container">
          <ul className="tree">
            <li>
              <span className="tree-node root-node">App (React Router)</span>
              <ul>
                <li>
                  <span className="tree-node layout-node">Layout (Outlet)</span>
                  <ul>
                    <li><span className="tree-node">Sidebar (Navegación Fija)</span></li>
                    <li>
                      <span className="tree-node page-node">Home (Dashboard)</span>
                      <ul>
                        <li><span className="tree-node leaf-node">MemberCard (x4)</span></li>
                      </ul>
                    </li>
                    <li>
                      <span className="tree-node page-node">Perfil (Ruta Dinámica)</span>
                      <ul>
                        <li><span className="tree-node leaf-node">Barras de Progreso</span></li>
                        <li><span className="tree-node leaf-node">Carrusel Interactivo</span></li>
                      </ul>
                    </li>
                    <li><span className="tree-node page-node">Explorador (Buscador JSON)</span></li>
                    <li>
                      <span className="tree-node page-node">Api (GitHub Fetch)</span>
                      <ul><li><span className="tree-node leaf-node">Paginación (Botones)</span></li></ul>
                    </li>
                    <li>
                      <span className="tree-node page-node">Galeria</span>
                      <ul><li><span className="tree-node leaf-node">Lightbox Modal</span></li></ul>
                    </li>
                    <li><span className="tree-node page-node">Bitácora</span></li>
                    <li><span className="tree-node page-node">Árbol de Renderizado</span></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}