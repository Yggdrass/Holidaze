import { useEffect, useState } from "react";
import MainLoggedIn from "../../components/layout/MainLoggedIn";
import MainLoggedOut from "../../components/layout/MainLoggedOut";
import { accessToken } from "../../storage/profile/accessToken";
import "./Home.modules.css";

const Home = () => {
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
