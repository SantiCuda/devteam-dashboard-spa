import MemberCard from '../components/MemberCard';
import teamData from '../data/team-data.json';

export default function Home() {
  return (
    <section id="integrantes">
      <h1 className="section-title">Talento Evolutivo - Dashboard</h1>
      <div className="grid-container">
        {/*iteramos sobre el array */}
        {teamData.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}