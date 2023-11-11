import { BsGeoAlt, BsTelephone, BsTwitter } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="col-1">
            <p>
              <a href="#">
                <span>
                  <BsGeoAlt />
                </span>
                г.Нукус ул.Е.Алакоз 171/2 Ориентир: Поликлиника №3
              </a>
            </p>
            <p>
              <a href="#">
                <span>
                  <BsTelephone />
                </span>
                +99899 561-05-55
              </a>
            </p>
          </div>
          <div className="col-2">
            <p>
              <a href="#">
                <span>
                  <CiMail />
                </span>
                saggilamlari@gmail.com
              </a>
            </p>
            <ul className="social-links">
              <li className="social-link">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaSquareInstagram />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
