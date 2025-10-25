import './Hero.css';
import { modelInfo } from '../../assets/data/portfolioData';
import heroBg from '../../assets/images/hero/hero-bg.webp';

const Hero = () => {
  const scrollToSection = sectionId => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{modelInfo.name}</h1>
        <p className="hero-tagline">{modelInfo.tagline}</p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('portfolio')}
          >
            Смотреть портфолио
          </button>
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
