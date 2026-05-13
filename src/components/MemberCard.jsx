import { Link } from 'react-router-dom';

// Recibimos "member" como prop, que será un objeto con los datos
export default function MemberCard({ member }) {
  return (

    <Link to={`/perfil/${member.id}`} className="member-card fade-in">
      <div className="card-img-wrapper">
        <img src={member.avatar} alt={member.name} />
      </div>
      <div className="card-info">
        <h3>{member.name}</h3>
        <span>{member.role}</span>
        <p>{member.description}</p>
      </div>
    </Link>
  );
}