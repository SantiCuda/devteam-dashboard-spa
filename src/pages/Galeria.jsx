import { useState, useEffect, useCallback } from 'react';

export default function Galeria() {
  // Estado para saber qué imagen está abierta en el Lightbox (null = cerrado)
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Array de imágenes de muestra relacionadas con la tecnología y programación
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', alt: 'Dev Workspace' },
    { id: 2, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', alt: 'Code on screen' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', alt: 'Computer setup' },
    { id: 4, url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80', alt: 'Laptop programming' },
    { id: 5, url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80', alt: 'Programming abstract' },
    { id: 6, url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80', alt: 'Technology devices' },
  ];

  // Funciones de navegación
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // useEffect para detectar la tecla ESC y las flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return; // Solo escucha si el lightbox está abierto
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Limpieza del evento cuando se desmonta o cierra
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section className="fade-in">
      <h2 className="section-title">Galería Interactiva</h2>
      
      {/* 1. Visualizador tipo Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={img.id} className="gallery-item" onClick={() => setSelectedIndex(index)}>
            <img src={img.url} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">🔍 Ampliar</div>
          </div>
        ))}
      </div>

      {/* 2. Lightbox (Solo se renderiza si hay una imagen seleccionada) */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-nav btn-left" onClick={prevImage}>◀</button>
            
            <div className="lightbox-img-wrapper">
              <img src={images[selectedIndex].url} alt={images[selectedIndex].alt} className="lightbox-img fade-in" />
            </div>
            
            <button className="lightbox-nav btn-right" onClick={nextImage}>▶</button>
          </div>
          <div className="lightbox-counter">{selectedIndex + 1} / {images.length}</div>
        </div>
      )}
    </section>
  );
}