import { useEffect, useState } from "react";
import "./Home.css";
import MainLoggedIn from "../../components/main/MainLoggedIn";
import MainLoggedOut from "../../components/main/MainLoggedOut";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  const accessToken = localStorage.getItem("Holidaze_Login_Token");
  console.log(accessToken);

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn ? <MainLoggedIn /> : <MainLoggedOut />}</>;
};

export default Home;
