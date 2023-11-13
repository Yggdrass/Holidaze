import MobileNavigation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";
import "./Header.css";
import "../navigation/Navigation.css";

const Header = () => {
  return (
    <header>
      <img
        src="../../../public/assets/holidaze_logo_black.png"
        alt="Logo"
        className="NavBarLogo"
      />
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
