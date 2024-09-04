import React, { useState } from 'react';
import style from './slider.module.css'

const slides = [
  { id: 1, text: "Slide 1", color: "#FF6347" },
  { id: 2, text: "Slide 2", color: "#4682B4" },
  { id: 3, text: "Slide 3", color: "#32CD32" },
  { id: 4, text: "Slide 4", color: "#FFD700" }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={style.slider}>
      <button className={style.navButton} onClick={goToPreviousSlide}>Anterior</button>
      <div className={style.slide} style={{ backgroundColor: slides[currentSlide].color }}>
        <h2>{slides[currentSlide].text}</h2>
      </div>
      <button className={style.navButton} onClick={goToNextSlide}>Próximo</button>
    </div>
  );
};

export default Slider;