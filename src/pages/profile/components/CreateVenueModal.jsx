import { useState } from "react";
import CreateVenueForm from "./CreateVenueForm";
import "../../../components/auth/components/Form.css";

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
        className="button_green btn_modal register_button_home"
        onClick={toggleCreateVenueModal}
      >
        create a venue
      </button>

      {createVenueModal && (
        <div className="modal ">
          <div className="overlay" onClick={toggleCreateVenueModal}></div>
          <div className="modal-content">
            <h1 className="h1_modal_title">create venue</h1>
            <CreateVenueForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateVenueModal;
