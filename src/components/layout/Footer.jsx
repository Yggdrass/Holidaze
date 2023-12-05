import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <img
        src="../../../public/assets/holidaze_logo_transparent_whitegems.png"
        alt="Holidaze Logo. The letter H with a tiara on top, all in pink on a white background."
      />
      <div className="social_media_icons">
        <FontAwesomeIcon icon={faSquareFacebook} className="footer_icon" />
        <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
        <FontAwesomeIcon icon={faTwitter} className="footer_icon" />
      </div>
      <p>&copy;2023 Holidaze</p>
    </footer>
  );
};

export default Footer;
