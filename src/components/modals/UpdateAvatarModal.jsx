import { useState } from "react";
import UpdateAvatarForm from "../forms/UpdateAvatarForm";

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
        className="button_green btn_modal update_avatar_button"
        onClick={toggleAvatarModal}
      >
        update avatar
      </button>

      {avatarModal && (
        <div className="modal_updateAvatar">
          <div className="overlay" onClick={toggleAvatarModal}></div>
          <div className="modal_content_updateAvatar">
            <h1 className="h1_avatarModal_title">update avatar</h1>
            <UpdateAvatarForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAvatarModal;
