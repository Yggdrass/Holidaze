import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./Navigation.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;

/** 
 * <img
        src="../../../public/assets/holidaze_logo_black.png"
        alt="Logo"
        className="NavBarLogo"
      />
*/
