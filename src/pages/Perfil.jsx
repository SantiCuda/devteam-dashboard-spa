import { useParams, Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import SocialLinks from '../components/SocialLinks';

const STACKS = {
  react: { label: 'React', src: '/img/stacks/react.svg' },
  node: { label: 'Node.js', src: '/img/stacks/node.svg' },
  aws: { label: 'AWS', src: '/img/stacks/aws.svg' },
  linux: { label: 'Linux', src: '/img/stacks/linux.svg' },
  security: { label: 'Security', src: '/img/stacks/security.svg' },
  angular: { label: 'Angular', src: '/img/stacks/angular.svg' },
  javascript: { label: 'JavaScript', src: '/img/stacks/javascript.svg' },
  css: { label: 'CSS', src: '/img/stacks/css.svg' },
  hardware: { label: 'Hardware', src: '/img/stacks/hardware.svg' },
  architecture: { label: 'Arquitectura', src: '/img/stacks/architecture.svg' },
};

export default function Perfil() {
  const { id } = useParams();
  
  // Simulación de base de datos
  const teamData = {
    "1": { name: "Martín", role: "Backend Developer", github: "https://github.com/martin", linkedin: "https://www.linkedin.com/in/martin", codes: ["node", "architecture", "javascript"], skills: [{ name: "Node.js", level: "90%" }, { name: "Arquitectura", level: "85%" }], projects: [ { title: 'API E-commerce', desc: 'Backend escalable en Node.' }, { title: 'Auth System', desc: 'Sistema de login con JWT.' }, { title: 'Chatbot REST', desc: 'Integración con IA.' } ] },
    "2": { name: "Adrian", role: "Infraestructura IT", github: "https://github.com/adrian", linkedin: "https://www.linkedin.com/in/adrian", codes: ["linux", "hardware", "security"], skills: [{ name: "Linux", level: "95%" }, { name: "Hardware", level: "85%" }], projects: [ { title: 'Data Center', desc: 'Migración de servidores.' }, { title: 'VPN Setup', desc: 'Configuración segura de red.' }, { title: 'Mantenimiento', desc: 'Soporte empresarial.' } ] },
    "3": { name: "Santiago", role: "Security & Cloud", github: "https://github.com/santiago", linkedin: "https://www.linkedin.com/in/santiago", codes: ["security", "aws", "linux"], skills: [{ name: "Ciberseguridad", level: "90%" }, { name: "AWS Cloud", level: "80%" }], projects: [ { title: 'Pentesting', desc: 'Auditoría de seguridad web.' }, { title: 'Cloud Deploy', desc: 'Arquitectura en Amazon Web Services.' }, { title: 'Firewall Rules', desc: 'Filtros y protección de red.' } ] },
    "4": { name: "Gaston", role: "Frontend Developer", github: "https://github.com/zamparg", linkedin: "https://www.linkedin.com/in/zamparg", codes: ["angular", "react", "css"], skills: [{ name: "Angular", level: "90%" }, { name: "React", level: "75%" }], projects: [ { title: 'WebApp Dashboard', desc: 'Panel administrativo moderno.' }, { title: 'UI Kit', desc: 'Librería de componentes.' }, { title: 'E-commerce UI', desc: 'Interfaz de tienda online.' } ] }
  };

  const member = teamData[id] || teamData["1"];

  const renderTechIcon = (stackCode) => {
    switch (stackCode) {
      case 'react':
      case 'node':
      case 'aws':
      case 'linux':
      case 'security':
      case 'angular':
      case 'javascript':
      case 'css':
      case 'hardware':
      case 'architecture': {
        const stack = STACKS[stackCode];

        return (
          <div className="tech-icon" key={stackCode} title={stack.label}>
            <img className="tech-icon-img" src={stack.src} alt={stack.label} width="16" height="16" />
            <small>{stack.label}</small>
          </div>
        );
      }
      default:
        return null;
    }
  };


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
          <h3 className='mb-1'>Habilidades</h3>
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
          <h3 className="mb-1">Tech Stack</h3>
          <div className="icons-grid">
            {member.codes.map(renderTechIcon)}
          </div>
        </div>

        {/* 3. Redes Sociales (Componente) */}
        <SocialLinks github={member.github} linkedin={member.linkedin} />
      </div>

      {/* 4. Carrusel de Proyectos (Componente) */}
      <div className="projects-carousel card-panel mt-2">
        <h3 className="mb-1">Proyectos Destacados</h3>
        {/* Le pasamos la data del integrante actual por prop */}
        <Carousel projects={member.projects} />
      </div>
    </section>
  );
}