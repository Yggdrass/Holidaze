import { useEffect, useState } from "react";
import MainLoggedIn from "../../components/layout/MainLoggedIn";
import MainLoggedOut from "../../components/layout/MainLoggedOut";
import "./Home.modules.css";

const Home = () => {
  const profile = load("profile");
  const accessToken = profile.accessToken;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn ? <MainLoggedIn /> : <MainLoggedOut />}</>;
};

export default Home;
