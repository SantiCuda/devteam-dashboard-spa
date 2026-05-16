export default function SocialLinks({ github, linkedin }) {
  return (
    <div className="social-media card-panel">
      <h3 className="mb-1">Contacto</h3>
      
      {github && (
        <a className="social-btn" href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
      
      {linkedin && (
        <a className="social-btn" href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      )}
    </div>
  );
}