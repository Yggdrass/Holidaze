import "./Navigation.css";
import { useEffect, useState } from "react";
import NavLinksLoggedIn from "./components/NavLinksLoggedIn";
import NavLinksLoggedOut from "./components/NavLinksLoggedOut";

const NavLinks = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  const accessToken = localStorage.getItem("Holidaze_Login_Token");
  console.log(accessToken);

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn ? <NavLinksLoggedIn /> : <NavLinksLoggedOut />}</>;
};

export default NavLinks;
