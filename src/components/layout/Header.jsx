import MobileNavigation from "../navigation/MobileNavigation";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header>
      <img
        src="../../../public/assets/holidaze_logo_black.png"
        alt="Holidaze Logo. The letter H with a tiara on top, all in pink on a black background."
      />
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
