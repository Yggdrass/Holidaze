import { useEffect, useState } from "react";
import NavLinksLoggedIn from "./components/NavLinksLoggedIn";
import NavLinksLoggedOut from "./components/NavLinksLoggedOut";

const NavLinks = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const accessToken = localStorage.getItem("Holidaze_Login_Token");
  //console.log("accessToken: ", accessToken);

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  //console.log("isLoggedIn: ", isLoggedIn);

  return <>{isLoggedIn ? <NavLinksLoggedIn /> : <NavLinksLoggedOut />}</>;
};

export default NavLinks;
