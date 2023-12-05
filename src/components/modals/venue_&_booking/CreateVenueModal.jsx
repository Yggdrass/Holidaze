import { useState } from "react";
import CreateVenueForm from "../../forms/venue/CreateVenueForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CreateVenueModal = () => {
  const [createVenueModal, setCreateVenueModal] = useState(false);
  const toggleCreateVenueModal = () => {
    setCreateVenueModal(!createVenueModal);
  };

  if (createVenueModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }

  return (
    <div>
      <button
        className="button_green btn_modal create_venue_button"
        onClick={toggleCreateVenueModal}
      >
        create a venue
      </button>

      {createVenueModal && (
        <div className="modal_createVenue">
          <div className="overlay" onClick={toggleCreateVenueModal}></div>
          <div className="modal_content_createVenue">
            <h1 className="h1_createVenueModal_title">create venue</h1>
            <CreateVenueForm />
            <button
              className="close_modal_button button_purple"
              onClick={toggleCreateVenueModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateVenueModal;
