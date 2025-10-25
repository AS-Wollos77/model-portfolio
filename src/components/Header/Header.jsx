import { useState } from 'react';
import './Header.css';
import { modelInfo } from '../../assets/data/portfolioData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = sectionId => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">{modelInfo.name}</div>

          {/* Кнопка гамбургер для мобильных */}
          <button
            className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Навигация */}
          <ul className={`nav-links ${isMenuOpen ? 'nav-links--active' : ''}`}>
            <li>
              <a
                href="#home"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                Обо мне
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
              >
                Портфолио
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Контакты
              </a>
            </li>
          </ul>

          {/* Оверлей для закрытия меню по клику вне его */}
          {isMenuOpen && (
            <div
              className="nav-overlay"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
