import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import teamData from '../data/team-data.json';

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

  const member = teamData.find((teamMember) => String(teamMember.id) === id) || teamData[0];

  // Estado para controlar qué proyecto del carrusel se está mostrando
  const [currentProject, setCurrentProject] = useState(0);

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

  // Funciones para avanzar y retroceder en el carrusel
  const nextSlide = () => setCurrentProject((prev) => (prev === member.projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentProject((prev) => (prev === 0 ? member.projects.length - 1 : prev - 1));

  return (
    <section className="perfil-section fade-in">
      <Link to="/" className="back-link">⬅ Volver al Dashboard</Link>
      
      <div className="perfil-header">
        <img className="perfil-avatar" src={member.avatar} alt={member.name} />
        <div className="perfil-header-titles">
          <h2>Perfil de {member.name}</h2>
          <p className="accent-text">{member.role}</p>
        </div>
      </div>

      <div className="perfil-grid">
        {/* 1. Barras de Progreso */}
        <div className="skills-container card-panel">
          <h3 className='mb-1'>Habilidades</h3>
          {member.skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: skill.level }}></div></div>
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

        {/* 3. Redes Sociales */}
        <div className="social-media card-panel">
          <h3 className="mb-1">Contacto</h3>
          <a className="social-btn" href={member.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="social-btn" href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* 4. Carrusel de Proyectos (Interactivo) */}
      <div className="projects-carousel card-panel mt-2">
        <h3 className="mb-1">Proyectos Destacados</h3>
        <div className="carousel">
          <button className="carousel-btn" onClick={prevSlide}>⬅ Anterior</button>
          <div className="carousel-item fade-in" key={currentProject}>
            <h4>{member.projects[currentProject].title}</h4>
            <p>{member.projects[currentProject].desc}</p>
          </div>
          <button className="carousel-btn" onClick={nextSlide}>Siguiente ➡</button>
        </div>
      </div>
    </section>
  );
}