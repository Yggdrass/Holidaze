import RegisterForm from "./components/RegisterForm";
import "./Auth.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const RegisterModal = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  if (registerModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }

  return (
    <div>
      <button
        className="button_green btn_modal register_button_home"
        onClick={toggleRegisterModal}
      >
        register
      </button>

      {registerModal && (
        <div className="modal_register">
          <div className="overlay" onClick={toggleRegisterModal}></div>
          <div className="modal_content_register">
            <button
              className="close_modal_button button_purple"
              onClick={toggleRegisterModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
            <h1>register</h1>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterModal;
