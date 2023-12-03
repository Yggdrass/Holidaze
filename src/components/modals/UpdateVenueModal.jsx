import { useState } from "react";
import UpdateVenueForm from "../forms/UpdateVenueForm";

const UpdateVenueModal = () => {
  const [updateVenueModal, setUpdateVenueModal] = useState(false);
  const toggleUpdateVenueModal = () => {
    setUpdateVenueModal(!updateVenueModal);
  };

  if (updateVenueModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }

  return (
    <div>
      <button
        className="button_green btn_modal register_button_home"
        onClick={toggleUpdateVenueModal}
      >
        update venue
      </button>

      {updateVenueModal && (
        <div className="modal ">
          <div className="overlay" onClick={toggleUpdateVenueModal}></div>
          <div className="modal-content">
            <h1 className="h1_modal_title">update venue</h1>
            <UpdateVenueForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVenueModal;
