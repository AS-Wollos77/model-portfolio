import { useState, useEffect } from 'react';
import './Portfolio.css';
import { portfolioImages } from '../../assets/data/portfolioData';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + portfolioImages.length) % portfolioImages.length
    );
  };

  const openModal = () => {
    setSelectedImage(portfolioImages[currentSlide]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Функции для получения индексов соседних фото
  const getPrevIndex = () =>
    (currentSlide - 1 + portfolioImages.length) % portfolioImages.length;
  const getNextIndex = () => (currentSlide + 1) % portfolioImages.length;

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Портфолио</h2>
          <p className="portfolio-subtitle">Мои работы</p>
        </div>

        {/* Карусель */}
        <div className="portfolio-carousel">
          <div className="carousel-container">
            {/* Предыдущее фото */}
            <div className="side-slide side-slide--prev">
              <img
                src={portfolioImages[getPrevIndex()].src}
                alt="Предыдущее фото"
                className="side-image"
              />
            </div>

            {/* Текущее фото */}
            <div className="main-slide" onClick={openModal}>
              <img
                src={portfolioImages[currentSlide].src}
                alt="Текущее фото"
                className="main-image"
              />
            </div>

            {/* Следующее фото */}
            <div className="side-slide side-slide--next">
              <img
                src={portfolioImages[getNextIndex()].src}
                alt="Следующее фото"
                className="side-image"
              />
            </div>

            {/* Стрелки навигации */}
            <button
              className="carousel-arrow carousel-arrow--prev"
              onClick={prevSlide}
              aria-label="Предыдущее фото"
            >
              <FaChevronLeft />
            </button>

            <button
              className="carousel-arrow carousel-arrow--next"
              onClick={nextSlide}
              aria-label="Следующее фото"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Индикаторы */}
          <div className="carousel-indicators">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? 'indicator--active' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Модальное окно */}
        {selectedImage && (
          <div className="portfolio-modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <img
                src={selectedImage.src}
                alt="Фото из портфолио"
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
