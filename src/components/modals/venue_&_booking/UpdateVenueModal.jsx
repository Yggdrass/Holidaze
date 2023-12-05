import { useState } from "react";
import UpdateVenueForm from "../../forms/venue/UpdateVenueForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const UpdateVenueModal = (Venue) => {
  const venue = Venue.Venue;
  console.log("Venue: ", venue);
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
        className="button_green btn_modal updateVenueModal_button"
        onClick={toggleUpdateVenueModal}
      >
        update venue
      </button>

      {updateVenueModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleUpdateVenueModal}></div>
          <div className="modal_content_updateVenue">
            <h1 className="h1_modal_title">update venue</h1>
            <UpdateVenueForm Venue={venue} />
            <button
              className="close_modal_button button_purple"
              onClick={toggleUpdateVenueModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVenueModal;
