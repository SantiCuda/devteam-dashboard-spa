import { useParams, Link } from 'react-router-dom';
import teamData from '../data/team-data.json';
import Carousel from '../components/Carousel';
import SocialLinks from '../components/SocialLinks';

const STACKS = {
  react: { label: 'React', src: '/devteam-dashboard-spa/img/stacks/react.svg' },
  node: { label: 'Node.js', src: '/devteam-dashboard-spa/img/stacks/node.svg' },
  aws: { label: 'AWS', src: '/devteam-dashboard-spa/img/stacks/aws.svg' },
  linux: { label: 'Linux', src: '/devteam-dashboard-spa/img/stacks/linux.svg' },
  security: { label: 'Security', src: '/devteam-dashboard-spa/img/stacks/security.svg' },
  angular: { label: 'Angular', src: '/devteam-dashboard-spa/img/stacks/angular.svg' },
  javascript: { label: 'JavaScript', src: '/devteam-dashboard-spa/img/stacks/javascript.svg' },
  css: { label: 'CSS', src: '/devteam-dashboard-spa/img/stacks/css.svg' },
  hardware: { label: 'Hardware', src: '/devteam-dashboard-spa/img/stacks/hardware.svg' },
  architecture: { label: 'Arquitectura', src: '/devteam-dashboard-spa/img/stacks/architecture.svg' },
};

export default function Perfil() {
  const { id } = useParams();

  const member = teamData.find((teamMember) => String(teamMember.id) === id) || teamData[0];

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