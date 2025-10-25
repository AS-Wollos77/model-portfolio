import './Contact.css';
import { modelInfo } from '../../assets/data/portfolioData';
import { FaInstagram, FaVk, FaTelegram, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  // Функции для открытия ссылок
  const openTelegram = () => {
    window.open(
      modelInfo.contact.social.telegram,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openInstagram = () => {
    window.open(
      modelInfo.contact.social.instagram,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openVK = () => {
    window.open(modelInfo.contact.social.vk, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Контакты</h2>
            <p className="contact-subtitle">
              Готовы к сотрудничеству? Свяжитесь со мной
            </p>
          </div>

          <div className="contact-grid">
            {/* Контактная информация */}
            <div className="contact-info">
              <h3>Контактная информация</h3>

              <div className="contact-items">
                <div className="contact-item" onClick={openTelegram}>
                  <div className="contact-icon">
                    <FaTelegram />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Telegram</span>
                    <div className="contact-value">
                      {modelInfo.contact.telegram}
                      <FaArrowRight className="arrow-icon" />
                    </div>
                  </div>
                </div>

                <div className="contact-item" onClick={openInstagram}>
                  <div className="contact-icon">
                    <FaInstagram />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Instagram</span>
                    <div className="contact-value">
                      {modelInfo.contact.instagram}
                      <FaArrowRight className="arrow-icon" />
                    </div>
                  </div>
                </div>

                <div className="contact-item" onClick={openVK}>
                  <div className="contact-icon">
                    <FaVk />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">ВКонтакте</span>
                    <div className="contact-value">
                      {modelInfo.contact.vk}
                      <FaArrowRight className="arrow-icon" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Социальные сети */}
              <div className="social-links">
                <h4>Подписывайтесь</h4>
                <div className="social-icons">
                  <button onClick={openTelegram} className="social-link">
                    <FaTelegram />
                  </button>
                  <button onClick={openInstagram} className="social-link">
                    <FaInstagram />
                  </button>
                  <button onClick={openVK} className="social-link">
                    <FaVk />
                  </button>
                </div>
              </div>
            </div>

            {/* Текст кликабельный */}
            <div className="contact-message">
              <h3>Давайте работать вместе!</h3>
              <p>
                Я всегда открыта для новых проектов и сотрудничества. Выберите
                удобный способ связи, и я отвечу вам в ближайшее время.
              </p>
              <div className="contact-features">
                <div className="feature-item" onClick={openTelegram}>
                  <span className="feature-icon">⚡</span>
                  <span className="feature-text">Быстрый ответ в Telegram</span>
                  <FaArrowRight className="feature-arrow" />
                </div>
                <div className="feature-item" onClick={openInstagram}>
                  <span className="feature-icon">📸</span>
                  <span className="feature-text">Портфолио в Instagram</span>
                  <FaArrowRight className="feature-arrow" />
                </div>
                <div className="feature-item" onClick={openVK}>
                  <span className="feature-icon">👥</span>
                  <span className="feature-text">Сообщество VKontakte</span>
                  <FaArrowRight className="feature-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
