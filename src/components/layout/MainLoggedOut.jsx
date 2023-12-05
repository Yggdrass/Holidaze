import LoginModal from "../modals/auth_&_profile/LoginModal";
import RegisterModal from "../modals/auth_&_profile/RegisterModal";
import "../../pages/home/Home.modules.css";

const MainLoggedOut = () => {
  return (
    <main className="main-loggedOut">
      <h1>HOLIDAZE</h1>

      <div className="buttons_container">
        <LoginModal />
        <RegisterModal />
      </div>
    </main>
  );
};

export default MainLoggedOut;
