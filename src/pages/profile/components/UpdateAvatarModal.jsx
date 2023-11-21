import { useState } from "react";
import UpdateAvatarForm from "./UpdateAvatarForm";

const UpdateAvatarModal = () => {
  const [avatarModal, setAvatarModal] = useState(false);
  const toggleAvatarModal = () => {
    setAvatarModal(!avatarModal);
  };

  if (avatarModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }
  return (
    <div>
      <button
        className="button_green btn_modal login_button_home"
        onClick={toggleAvatarModal}
      >
        update avatar
      </button>

      {avatarModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleAvatarModal}></div>
          <div className="modal-content">
            <h1 className="h1_modal_title">update avatar</h1>
            <UpdateAvatarForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAvatarModal;
