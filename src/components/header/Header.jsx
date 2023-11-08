import MobileNavigation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";
import "../navigation/Navigation.module.css";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
