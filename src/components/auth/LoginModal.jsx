import LoginForm from "./components/LoginForm";
import "./Auth.css";
import { useState } from "react";

const LoginModal = () => {
  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  if (loginModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }

  return (
    <div>
      <button
        className="button_green btn_modal login_button_home"
        onClick={toggleLoginModal}
      >
        login
      </button>

      {loginModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleLoginModal}></div>
          <div className="modal-content">
            <h1 className="h1_modal_title">login</h1>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
