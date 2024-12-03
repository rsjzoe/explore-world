import React, { useState, useEffect } from "react";
import "./carousel.css";

interface AnimatedCarouselProps {
  images: string[]; // Liste des URLs des images
  interval?: number; // Temps entre les animations (en ms)
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="animated-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? "active" : "inactive"
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedCarousel;
