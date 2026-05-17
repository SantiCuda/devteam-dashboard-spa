import { useState, useCallback } from 'react';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', alt: 'Dev Workspace' },
    { id: 2, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', alt: 'Code on screen' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', alt: 'Computer setup' },
    { id: 4, url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80', alt: 'Laptop programming' },
    { id: 5, url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80', alt: 'Programming abstract' },
    { id: 6, url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80', alt: 'Technology devices' },
    { id: 7, url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80', alt: 'Coding screen' },
    { id: 8, url: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80', alt: 'Cyber security' }
  ];

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  return (
    <section className="fade-in">
      <h2 className="section-title">Galería Interactiva</h2>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={img.id} className="gallery-item" onClick={() => setSelectedIndex(index)}>
            <img src={img.url} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">🔍 Ampliar</div>
          </div>
        ))}
      </div>

      {/* Renderizado condicional del componente aislado */}
      {selectedIndex !== null && (
        <Lightbox 
          images={images}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}