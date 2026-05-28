const entradas = {
  v1: {
    decisionesDiseno: [
      {
        fecha: "29 Abr 2026",
        titulo: "Tipografía: Lexend",
        descripcion:
          "Se eligió Lexend como fuente principal por su alta legibilidad en pantalla y su perfil moderno y neutral, coherente con la identidad del equipo.",
      },
      {
        fecha: "29 Abr 2026",
        titulo: "Layout de cards en grid",
        descripcion:
          "Se optó por un grid de cuatro columnas para la landing, permitiendo escalar el equipo sin modificar el markup.",
      },
      {
        fecha: "29 Abr 2026",
        titulo: "Navbar generado dinámicamente",
        descripcion:
          "El header de navegación se inyecta vía layout.js para mantener un único punto de control y evitar duplicación de código HTML entre páginas.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Favicon SVG con identidad DT",
        descripcion:
          "Se diseñó un favicon SVG propio con las iniciales del equipo (DT) sobre fondo oscuro con bordes redondeados, evitando dependencias externas.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Separación Perfil / Intereses",
        descripcion:
          "Se decidió dividir el contenido de cada integrante en dos vistas — habilidades profesionales e intereses personales — accesibles mediante un botón toggle, mejorando la organización y la experiencia de navegación.",
      },
    ],
    dificultades: [
      {
        fecha: "02 May 2026",
        titulo: "Toggle que no switcheaba contenido",
        descripcion:
          "La función original de cards.js solo modificaba el color del borde de la tarjeta, sin ocultar ni mostrar secciones. Se reescribió completamente para controlar la visibilidad de #perfil-section e #intereses-section.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Caracteres especiales en HTML",
        descripcion:
          "El operador & en texto plano dentro de atributos y contenido generaba warnings de validación. Se reemplazó por la entidad &amp; en los casos correspondientes.",
      },
    ],
    cambiosImportantes: [
      {
        fecha: "29 Abr 2026",
        titulo: "Creación de la estructura del proyecto",
        descripcion:
          "Se establece la arquitectura base: index.html, páginas de perfil por integrante, carpetas css/, js/ e img/. Se elimina un archivo sobrante del scaffolding inicial.",
      },
      {
        fecha: "30 Abr 2026",
        titulo: "Incorporación de perfiles e imágenes",
        descripcion:
          "Se agregan los avatares de cada integrante y se ajusta el CSS de tarjetas.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Favicon y títulos unificados",
        descripcion:
          "Se agrega el favicon SVG a todos los archivos HTML y se estandarizan los títulos con el prefijo DevTeam - para consistencia en pestañas y marcadores.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Implementación del toggle Perfil / Intereses",
        descripcion:
          "Se reestructuran los cuatro perfiles para separar habilidades e intereses en bloques independientes. Se reescribe cards.js para manejar la alternancia de vistas y el texto del botón de forma dinámica.",
      },
      {
        fecha: "02 May 2026",
        titulo: "Botón flotante para volver arriba",
        descripcion:
          "Se implementa en main.js un botón de scroll-top que aparece al descender en la página y permite regresar al inicio con desplazamiento suave.",
      },
    ],
  },
  v2: {
    decisionesDiseno: [
      {
        fecha: "15 May 2026",
        titulo: "Migración a arquitectura React + Vite",
        descripcion:
          "Se decidió migrar la totalidad del proyecto a React 19 con Vite como bundler. La motivación principal fue la componentización: cada sección repetida (tarjetas de integrantes, botones sociales, carrusel) pasó a ser un componente reutilizable alimentado por datos, eliminando la duplicación de markup.",
      },
      {
        fecha: "15 May 2026",
        titulo: "Sidebar fija como eje de navegación (Dashboard UX)",
        descripcion:
          "Se reemplazó el navbar horizontal de v1 por una Sidebar lateral fija con estética de dashboard. La decisión responde a la necesidad de que todas las secciones sean accesibles en todo momento sin interrumpir la vista principal. Se integró con React Router v7 para navegación SPA sin recargas.",
      },
      {
        fecha: "17 May 2026",
        titulo: "Gestión de estado con hooks nativos",
        descripcion:
          "Se optó por useState y useEffect de React sin librerías de estado externas (Redux, Zustand). El alcance del proyecto no justificaba la complejidad adicional, y los hooks nativos cubren todos los casos: filtrado en tiempo real, paginación, lightbox y carrusel.",
      },
      {
        fecha: "19 May 2026",
        titulo: "Lightbox con control por teclado",
        descripcion:
          "El componente Lightbox.jsx implementa listeners de teclado (ESC para cerrar, flechas para navegar) vía useEffect con cleanup en unmount. Se usó useCallback para memorizar las funciones de navegación y evitar re-registros del listener.",
      },
      {
        fecha: "20 May 2026",
        titulo: "Árbol de renderizado como documentación viva",
        descripcion:
          "Se decidió implementar la sección de arquitectura como un componente React (Arbol.jsx) con listas anidadas y estilos CSS personalizados en lugar de una imagen estática, de modo que el árbol pueda actualizarse cuando cambie la estructura sin depender de herramientas externas.",
      },
    ],
    dificultades: [
      {
        fecha: "16 May 2026",
        titulo: "Rutas dinámicas con useParams en Perfil",
        descripcion:
          "El componente Perfil.jsx necesitaba cargar datos distintos según el integrante. Se resolvió con rutas /perfil/:id en React Router y useParams() para recuperar el ID, buscando el miembro en el array de team-data.json. Se añadió un guard para redirigir a 404 si el ID no existe.",
      },
      {
        fecha: "17 May 2026",
        titulo: "Rate limit 403 en GitHub API",
        descripcion:
          "La API pública de GitHub aplica límite de 60 requests/hora sin autenticación. Se detectó que el componente Api.jsx podía recibir un 403 en lugar de un error genérico. Se añadió manejo específico para ese código de estado, mostrando un mensaje claro al usuario en lugar de un error técnico.",
      },
      {
        fecha: "18 May 2026",
        titulo: "Animaciones de entrada con stagger en Home",
        descripcion:
          "Para animar las tarjetas del Home con retardo escalonado (stagger) sin JavaScript extra, se aplicaron delays CSS incrementales (0.1s, 0.3s, 0.5s, 0.7s) mediante la propiedad animation-delay en cada MemberCard según su índice. Esto evitó dependencias de librerías de animación.",
      },
      {
        fecha: "20 May 2026",
        titulo: "Sidebar responsive con hamburger en mobile",
        descripcion:
          "En viewports menores a 768px la sidebar ocupa toda la pantalla al desplegarse. Se resolvió con un estado isOpen en Sidebar.jsx, transiciones CSS (transform: translateX) y un overlay semitransparente que cierra el menú al hacer click fuera.",
      },
    ],
    cambiosImportantes: [
      {
        fecha: "15 May 2026",
        titulo: "Scaffolding inicial con Vite + React Router",
        descripcion:
          "Se inicializa el proyecto con npm create vite, se instala react-router-dom y se define la estructura de carpetas: src/components/, src/pages/, src/data/. Se configura App.jsx con todas las rutas y Layout.jsx con el Outlet.",
      },
      {
        fecha: "16 May 2026",
        titulo: "Migración de datos a JSON centralizado",
        descripcion:
          "Los datos de integrantes (nombre, rol, habilidades, proyectos, redes) que en v1 estaban hardcodeados en cada HTML se consolidaron en src/data/team-data.json. El explorador de tecnologías usa src/data/datos.json con 20 objetos categorizados.",
      },
      {
        fecha: "17 May 2026",
        titulo: "Implementación del Explorador JSON con filtrado",
        descripcion:
          "Explorador.jsx incorpora búsqueda en tiempo real sobre 20 objetos de tecnología. El filtro opera sobre nombre y categoría simultáneamente usando Array.filter con toLowerCase para comparación case-insensitive.",
      },
      {
        fecha: "18 May 2026",
        titulo: "Integración de GitHub API con paginación",
        descripcion:
          "Api.jsx consume la GitHub Search Users API paginada (10 resultados por página). Se implementaron los estados loading, error y page con useEffect dependiente de [page]. Los botones Anterior/Siguiente se deshabilitan en los extremos de la paginación.",
      },
      {
        fecha: "19 May 2026",
        titulo: "Galería interactiva con Lightbox",
        descripcion:
          "Galeria.jsx renderiza un grid de 8 imágenes. Al hacer click en cualquiera, monta el componente Lightbox.jsx con overlay full-screen, navegación circular y soporte de teclado. Las imágenes del grid tienen efecto hover de zoom (scale 1.1) y overlay con ícono de lupa.",
      },
      {
        fecha: "20 May 2026",
        titulo: "Perfiles individuales con barras de progreso y carrusel",
        descripcion:
          "Cada perfil en Perfil.jsx incluye barras de progreso animadas (transición CSS 1.5s ease-in-out) para el stack técnico, un carrusel manual de 3 proyectos con navegación Anterior/Siguiente, y una grilla de iconos SVG del tech stack con efecto hover de escala.",
      },
      {
        fecha: "22 May 2026",
        titulo: "Deploy en Vercel con rama main protegida",
        descripcion:
          "Se configuró Vercel para despliegue automático desde la rama main. Las ramas feature/ y develop se usan para desarrollo; solo los Pull Requests aprobados se mergean a main, disparando automáticamente un nuevo build.",
      },
    ],
  },
};

function EntradaItem({ fecha, titulo, descripcion }) {
  return (
    <div className="bitacora-item">
      <span className="bitacora-date">{fecha}</span>
      <div className="bitacora-body">
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

function SeccionBitacora({ titulo, entradas: items }) {
  return (
    <div className="card-panel" style={{ marginBottom: "1.5rem" }}>
      <h3 style={{ color: "var(--accent)", marginBottom: "1.2rem", fontSize: "1.2rem" }}>
        {titulo}
      </h3>
      <div className="bitacora-list">
        {items.map((e, i) => (
          <EntradaItem key={i} {...e} />
        ))}
      </div>
    </div>
  );
}

export default function Bitacora() {
  return (
    <section className="fade-in">
      <h2 className="section-title">Bitácora del Proyecto</h2>

      {/* ── V1 ── */}
      <div className="version-block">
        <h3 className="version-label">Versión 1 — HTML / CSS / Vanilla JS</h3>
        <SeccionBitacora titulo="Decisiones de Diseño" entradas={entradas.v1.decisionesDiseno} />
        <SeccionBitacora titulo="Dificultades y Soluciones" entradas={entradas.v1.dificultades} />
        <SeccionBitacora titulo="Cambios Importantes" entradas={entradas.v1.cambiosImportantes} />
      </div>

      {/* ── V2 ── */}
      <div className="version-block">
        <h3 className="version-label">Versión 2 — React + Vite</h3>
        <SeccionBitacora titulo="Decisiones de Diseño" entradas={entradas.v2.decisionesDiseno} />
        <SeccionBitacora titulo="Dificultades y Soluciones" entradas={entradas.v2.dificultades} />
        <SeccionBitacora titulo="Cambios Importantes" entradas={entradas.v2.cambiosImportantes} />

        {/* Roles y flujo de trabajo */}
        <div className="card-panel" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: "var(--accent)", marginBottom: "1.2rem", fontSize: "1.2rem" }}>
            Roles y Flujo de Trabajo
          </h3>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            Para la organización del proyecto el equipo adoptó metodologías ágiles con{" "}
            <strong>Trello</strong> como tablero Kanban, dividiendo historias de usuario en tareas
            (Backlog → In Progress → Review → Done) y asignando responsabilidades según el perfil
            de cada integrante: Frontend, Backend, Infra IT y Seguridad.
          </p>
          <p style={{ lineHeight: "1.6" }}>
            En control de versiones se implementó <strong>GitFlow</strong>: rama{" "}
            <code>main</code> protegida con deploy automático a Vercel, rama <code>develop</code>{" "}
            para integración continua, y ramas <code>feature/nombre-tarea</code> por cada
            asignación. Los conflictos se resuelven localmente antes de abrir Pull Request.
          </p>
        </div>

        {/* Justificación migración */}
        <div className="card-panel">
          <h3 style={{ color: "var(--accent)", marginBottom: "1.2rem", fontSize: "1.2rem" }}>
            Justificación de la Migración a React
          </h3>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            La evolución desde la v1 (HTML estático + CSS + Vanilla JS) hacia React marca un hito
            en escalabilidad, interactividad y mantenibilidad:
          </p>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>
              <strong>Componentización:</strong> componentes reutilizables como{" "}
              <code>&lt;MemberCard /&gt;</code> eliminan la duplicación de HTML entre perfiles.
            </li>
            <li>
              <strong>Navegación SPA:</strong> React Router convierte el sitio en una Single Page
              Application; el cambio de sección es instantáneo sin recargar la página.
            </li>
            <li>
              <strong>Estado reactivo:</strong> el hook <code>useState</code> maneja filtrado en
              tiempo real, lightbox y carrusel sin manipular el DOM directamente.
            </li>
            <li>
              <strong>Consumo de APIs:</strong> <code>useEffect</code> provee un ciclo de vida
              seguro para llamadas asíncronas con manejo de estados de carga y error.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
