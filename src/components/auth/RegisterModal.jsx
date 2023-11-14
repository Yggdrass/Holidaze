import RegisterForm from "./components/RegisterForm";
import "./Auth.css";
import { useState } from "react";

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
      <button className="button_green btn_modal" onClick={toggleRegisterModal}>
        register
      </button>

      {registerModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleRegisterModal}></div>
          <div className="modal-content">
            <h1>register</h1>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterModal;
