import { useState } from "react";
import "./Home.css";
import MainLoggedOut from "../../components/main/MainLoggedOut";
import MainLoggedIn from "../../components/main/MainLoggedIn";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //console.log(isLoggedIn);

  const accessToken = localStorage.getItem("Holidaze_Login_Token");
  console.log(accessToken);

  if (accessToken) {
    setIsLoggedIn(true);
  }

  return <div>{isLoggedIn ? <MainLoggedIn /> : <MainLoggedOut />}</div>;
};

export default Home;
