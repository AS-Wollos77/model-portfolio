import './About.css';
import { modelInfo } from '../../assets/data/portfolioData';
import aboutImage from '../../assets/images/about/about-photo.webp';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          {/* Заголовок секции */}
          <div className="about-header">
            <h2 className="about-title">Обо мне</h2>
            <p className="about-subtitle">Модель для ваших креативных идей</p>
          </div>

          <div className="about-grid">
            {/* Фотография */}
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img
                  src={aboutImage}
                  alt={modelInfo.name}
                  className="about-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            {/* Информация */}
            <div className="about-info">
              {/* Биография */}
              <div className="about-bio">
                <h3>Биография</h3>
                <p>{modelInfo.about.bio}</p>
              </div>

              {/* Параметры */}
              <div className="about-stats">
                <h3>Параметры</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Рост</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.height}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Грудь</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.bust}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Талия</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.waist}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Бедра</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.hips}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Глаза</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.eyes}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Волосы</span>
                    <span className="stat-value">
                      {modelInfo.about.stats.hair}
                    </span>
                  </div>
                </div>
              </div>

              {/* Навыки */}
              <div className="about-skills">
                <h3>Навыки</h3>
                <div className="skills-list">
                  {modelInfo.about.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
