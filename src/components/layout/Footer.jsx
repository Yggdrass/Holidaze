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
        alt=""
      />
      <div className="social_media_icons">
        <FontAwesomeIcon icon={faSquareFacebook} className="footer_icon" />
        <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
        <FontAwesomeIcon icon={faTwitter} className="footer_icon" />
      </div>
      <p>@Copyright Holidaze 2023</p>
    </footer>
  );
};

export default Footer;
