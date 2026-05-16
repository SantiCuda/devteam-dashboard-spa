import { useState } from 'react';

export default function Carousel({ projects }) {
  const [currentProject, setCurrentProject] = useState(0);

  const nextSlide = () => setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={prevSlide}>⬅ Anterior</button>
      <div className="carousel-item fade-in" key={currentProject}>
        <h4>{projects[currentProject].title}</h4>
        <p>{projects[currentProject].desc}</p>
      </div>
      <button className="carousel-btn" onClick={nextSlide}>Siguiente ➡</button>
    </div>
  );
}