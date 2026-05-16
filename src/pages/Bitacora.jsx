export default function Bitacora() {
  return (
    <section className="fade-in">
      <h2 className="section-title">Bitácora del Proyecto</h2>

      <div className="grid-container" style={{ gridTemplateColumns: '1fr' }}>
        
        {/* 1. Flujo de Trabajo y Roles */}
        <div className="card-panel">
          <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Roles y Flujo de Trabajo</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
            Para la organización y ejecución de este proyecto, el equipo adoptó metodologías ágiles utilizando <strong>Trello</strong> como tablero Kanban. Esto nos permitió dividir las historias de usuario en tareas manejables (Backlog, In Progress, Review y Done) y asignar responsabilidades claras basadas en el perfil de cada integrante (Frontend, Backend, Infra IT y Seguridad).
          </p>
          <p style={{ lineHeight: '1.6' }}>
            En cuanto al control de versiones, implementamos <strong>GitFlow</strong>. Mantuvimos una rama <code>main</code> protegida para el código de producción que se despliega automáticamente en Vercel, y una rama <code>develop</code> para la integración continua. Cada miembro trabajó sus asignaciones en ramas independientes (<code>feature/nombre-tarea</code>), resolviendo conflictos localmente antes de realizar los <em>Pull Requests</em>.
          </p>
        </div>

        {/* 2. Justificación de Migración */}
        <div className="card-panel">
          <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Justificación de Migración a React</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
            La evolución del Trabajo Práctico 1 (basado en HTML estático, CSS y Vanilla JavaScript) hacia esta arquitectura basada en <strong>React</strong> marca un hito fundamental en la escalabilidad, interactividad y mantenibilidad del proyecto:
          </p>
          
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>
              <strong>Componentización:</strong> En lugar de duplicar código HTML para cada tarjeta o sección, React nos permitió crear componentes reutilizables como <code>&lt;MemberCard /&gt;</code>, alimentándolos dinámicamente desde un array de datos y centralizando los cambios de diseño en un solo lugar.
            </li>
            <li>
              <strong>Navegación Fluida (SPA):</strong> Gracias a <code>React Router</code>, transformamos el sitio en una Single Page Application. Ahora, al navegar desde el Sidebar, las vistas cambian de forma instantánea sin recargar la página del navegador, lo que mejora drásticamente la experiencia de usuario (UX).
            </li>
            <li>
              <strong>Reactividad y Estado Local:</strong> Las interacciones complejas, como el filtrado de texto en tiempo real en el Explorador JSON, o el Lightbox y el Carrusel, se resolvieron de forma declarativa con el hook <code>useState</code>, sin tener que manipular el DOM manualmente (evitando el engorroso <code>document.getElementById</code>).
            </li>
            <li>
              <strong>Consumo de APIs:</strong> El hook <code>useEffect</code> nos proporcionó un ciclo de vida seguro para hacer llamadas asíncronas a servidores externos (GitHub API), permitiéndonos manejar estados visuales de "Cargando" y "Error" de manera impecable.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}