import { useState } from "react";
import CreateBookingForm from "../../forms/booking/CreateBookingForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
          <div className="modal_content_createBooking">
            <h1 className="h1_modal_title">create booking at this event</h1>
            <CreateBookingForm />
            <button
              className="close_modal_button button_purple"
              onClick={toggleCreateBookingModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBookingModal;
