import { useState } from "react";
import UpdateVenueManagerForm from "../forms/UpdateVenueManagerForm";

const UpdateVenueManagerModal = () => {
  const [venueManagerModal, setVenueManagerModal] = useState(false);
  const toggleVenueManagerModal = () => {
    setVenueManagerModal(!venueManagerModal);
  };

  if (venueManagerModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }
  return (
    <div>
      <button
        className="button_green btn_modal login_button_home"
        onClick={toggleVenueManagerModal}
      >
        update venue manager
      </button>

      {venueManagerModal && (
        <div className="modal_updateVenueManager">
          <div className="overlay" onClick={toggleVenueManagerModal}></div>
          <div className="modal_content_updateVenueManager">
            <h1 className="h1_venueManagerModal_title">update venue manager</h1>
            <UpdateVenueManagerForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVenueManagerModal;
