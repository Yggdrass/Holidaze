import { useState } from "react";
import CreateBookingForm from "../forms/CreateBookingForm";

const CreateBookingModal = () => {
  const [createBookingModal, setCreateBookingModal] = useState(false);
  const toggleCreateBookingModal = () => {
    setCreateBookingModal(!createBookingModal);
  };

  if (createBookingModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }
  return (
    <div>
      <button
        className="button_green btn_modal login_button_home"
        onClick={toggleCreateBookingModal}
      >
        book at this venue
      </button>

      {createBookingModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleCreateBookingModal}></div>
          <div className="modal-content">
            <h1 className="h1_modal_title">create booking at this event</h1>
            <CreateBookingForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBookingModal;
