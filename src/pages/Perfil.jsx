import { useParams, Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import SocialLinks from '../components/SocialLinks';

export default function Perfil() {
  const { id } = useParams();
  
  // Simulación de base de datos
  const teamData = {
    "1": { name: "Martín", role: "Backend Developer", skills: [{ name: "Node.js", level: "90%" }, { name: "Arquitectura", level: "85%" }], projects: [ { title: 'API E-commerce', desc: 'Backend escalable en Node.' }, { title: 'Auth System', desc: 'Sistema de login con JWT.' }, { title: 'Chatbot REST', desc: 'Integración con IA.' } ] },
    "2": { name: "Adrian", role: "Infraestructura IT", skills: [{ name: "Linux", level: "95%" }, { name: "Hardware", level: "85%" }], projects: [ { title: 'Data Center', desc: 'Migración de servidores.' }, { title: 'VPN Setup', desc: 'Configuración segura de red.' }, { title: 'Mantenimiento', desc: 'Soporte empresarial.' } ] },
    "3": { name: "Santiago", role: "Security & Cloud", skills: [{ name: "Ciberseguridad", level: "90%" }, { name: "AWS Cloud", level: "80%" }], projects: [ { title: 'Pentesting', desc: 'Auditoría de seguridad web.' }, { title: 'Cloud Deploy', desc: 'Arquitectura en Amazon Web Services.' }, { title: 'Firewall Rules', desc: 'Filtros y protección de red.' } ] },
    "4": { name: "Gaston", role: "Frontend Developer", skills: [{ name: "Angular", level: "90%" }, { name: "React", level: "75%" }], projects: [ { title: 'WebApp Dashboard', desc: 'Panel administrativo moderno.' }, { title: 'UI Kit', desc: 'Librería de componentes.' }, { title: 'E-commerce UI', desc: 'Interfaz de tienda online.' } ] }
  };

  const member = teamData[id] || teamData["1"];

  return (
    <section className="perfil-section fade-in">
      <Link to="/" className="back-link">⬅ Volver al Dashboard</Link>
      
      <div className="perfil-header">
        <h2>Perfil de {member.name}</h2>
        <p className="accent-text">{member.role}</p>
      </div>

      <div className="perfil-grid">
        {/* 1. Barras de Progreso */}
        <div className="skills-container card-panel">
          <h3>Habilidades</h3>
          {member.skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Tech Stack e Iconografía */}
        <div className="tech-stack card-panel">
          <h3>Tech Stack</h3>
          <div className="icons-grid">
            <div className="tech-icon">⚛️</div>
            <div className="tech-icon">🟨</div>
            <div className="tech-icon">🌐</div>
            <div className="tech-icon">🎨</div>
            <div className="tech-icon">📦</div>
          </div>
        </div>

        {/* 3. Redes Sociales (Componente) */}
        <SocialLinks />
      </div>

      {/* 4. Carrusel de Proyectos (Componente) */}
      <div className="projects-carousel card-panel mt-2">
        <h3>Proyectos Destacados</h3>
        {/* Le pasamos la data del integrante actual por prop */}
        <Carousel projects={member.projects} />
      </div>
    </section>
  );
}