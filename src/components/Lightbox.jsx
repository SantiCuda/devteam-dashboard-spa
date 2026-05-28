import { useEffect } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Limpieza del evento cuando el componente se desmonta (se cierra el modal)
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Si por alguna razón el índice es null, no renderizamos nada
  if (currentIndex === null) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      
      {/* Detenemos la propagación del clic para que hacer clic en la imagen no cierre el modal */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-nav btn-left" onClick={onPrev}>◀</button>
        
        <div className="lightbox-img-wrapper">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].alt} 
            className="lightbox-img fade-in" 
          />
        </div>
        
        <button className="lightbox-nav btn-right" onClick={onNext}>▶</button>
      </div>
      
      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}