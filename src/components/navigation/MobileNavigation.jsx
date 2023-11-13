import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const hamburgerIconClosed = (
    <FontAwesomeIcon
      icon={faX}
      className="Hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="MobileNavigation">
      {open ? hamburgerIconClosed : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
