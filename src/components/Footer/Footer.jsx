import { Link } from "react-router-dom";
import GithubLogo from "../../assets/icons/github-icon.svg";
import FacebookLogo from "../../assets/icons/facebook-icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Desktop & Tablet View */}
      <div className="footer__desktop">
        <p className="footer__text">© 2024 Supersite, Powered by News API</p>
        <div className="footer__info">
          <Link to="/" className="footer__link">
            <p className="footer__home">Home</p>
          </Link>
          <p className="footer__about">TripleTen</p>
          <div className="footer__socials">
            <a
              href="https://github.com/Dmc4u"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={GithubLogo}
                alt="GitHub"
                className="footer__social-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/dmc4uonlinestore"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="footer__social-logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="footer__mobile">
        <div className="footer__mobile-top">
          <Link to="/" className="footer__link">
            <p className="footer__home">Home</p>
          </Link>
          <div className="footer__socials">
            <a
              href="https://github.com/Dmc4u"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={GithubLogo}
                alt="GitHub"
                className="footer__social-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/dmc4uonlinestore"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="footer__social-logo"
              />
            </a>
          </div>
        </div>
        <p className="footer__about">TripleTen</p>
        <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      </div>
    </footer>
  );
};

export default Footer;
