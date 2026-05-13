import MemberCard from '../components/MemberCard';

export default function Home() {
  // Simulamos nuestros datos. ¡Mira cómo ya no repetimos código!
  const teamMembers = [
    {
      id: 1,
      name: 'Martín',
      role: 'Backend Developer',
      description: 'Especialista en Node.js y arquitectura de sistemas.',
      avatar: '/img/avatar-martin.png'
    },
    {
      id: 2,
      name: 'Adrian',
      role: 'Gestion de Infraestructura IT',
      description: 'Especialista en soluciones de hardware empresarial & Data Centers.',
      avatar: '/img/avatar-adrian.png'
    },
    {
      id: 3,
      name: 'Santiago',
      role: 'Security & Backend Developer',
      description: 'Especialista en seguridad informatica, backend y cloud computing.',
      avatar: '/img/avatar-santiago.png'
    },
    {
      id: 4,
      name: 'Gaston',
      role: 'Frontend Developer',
      description: 'Especialista en Angular y Web apps.',
      avatar: '/img/avatar-gaston.png'
    }
  ];

  return (
    <section id="integrantes">
      <h1 className="section-title">Talento Evolutivo - Dashboard</h1>
      <div className="grid-container">
        {/*iteramos sobre el array */}
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}