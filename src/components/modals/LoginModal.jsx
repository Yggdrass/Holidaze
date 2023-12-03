import LoginForm from "../forms/LoginForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
        <div className="modal_login">
          <div className="overlay" onClick={toggleLoginModal}></div>
          <div className="modal_content_login">
            <button
              className="close_modal_button button_purple"
              onClick={toggleLoginModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
            <h1 className="h1_modal_title">login</h1>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
