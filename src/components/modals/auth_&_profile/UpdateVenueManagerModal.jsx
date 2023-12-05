import { useState } from "react";
import UpdateVenueManagerForm from "../../forms/profile/UpdateVenueManagerForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
        className="button_green btn_modal update_venueManagerRole_button"
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
            <button
              className="close_modal_button button_purple"
              onClick={toggleVenueManagerModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVenueManagerModal;
