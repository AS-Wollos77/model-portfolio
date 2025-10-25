import './Footer.css';
import { modelInfo } from '../../assets/data/portfolioData';
import { FaInstagram, FaVk, FaTelegram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Основная информация */}
          <div className="footer-main">
            <div className="footer-info">
              <h3 className="footer-name">{modelInfo.name}</h3>
              <p className="footer-tagline">{modelInfo.tagline}</p>
              <p className="footer-location">{modelInfo.location}</p>
            </div>

            {/* Контакты в подвале */}
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <FaTelegram className="footer-contact-icon" />
                <a
                  href={modelInfo.contact.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  {modelInfo.contact.telegram}
                </a>
              </div>
              <div className="footer-contact-item">
                <FaInstagram className="footer-contact-icon" />
                <a
                  href={modelInfo.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  {modelInfo.contact.instagram}
                </a>
              </div>
              <div className="footer-contact-item">
                <FaVk className="footer-contact-icon" />
                <a
                  href={modelInfo.contact.social.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  {modelInfo.contact.vk}
                </a>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="footer-social">
            <h4>Подписывайтесь</h4>
            <div className="footer-social-icons">
              <a
                href={modelInfo.contact.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href={modelInfo.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={modelInfo.contact.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="ВКонтакте"
              >
                <FaVk />
              </a>
            </div>
          </div>

          {/* Копирайт */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} {modelInfo.name}. Сделано с{' '}
                <FaHeart className="heart-icon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
