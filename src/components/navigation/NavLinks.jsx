import { useEffect, useState } from "react";
import NavLinksLoggedIn from "./NavLinksLoggedIn";
import NavLinksLoggedOut from "./NavLinksLoggedOut";

const NavLinks = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = localStorage.getItem("Holidaze_Login_Token");

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn ? <NavLinksLoggedIn /> : <NavLinksLoggedOut />}</>;
};

export default NavLinks;
