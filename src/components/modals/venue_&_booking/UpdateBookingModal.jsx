import { useState } from "react";
import UpdateBookingForm from "../../forms/booking/UpdateBookingForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const UpdateBookingModal = () => {
  const [updateBookingModal, setUpdateBookingModal] = useState(false);
  const toggleUpdateBookingModal = () => {
    setUpdateBookingModal(!updateBookingModal);
  };

  if (updateBookingModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("acitve-modal");
  }
  return (
    <div>
      <button
        className="button_green btn_modal login_button_home"
        onClick={toggleUpdateBookingModal}
      >
        update this booking
      </button>

      {updateBookingModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleUpdateBookingModal}></div>
          <div className="modal_content_updateBooking">
            <h1 className="h1_modal_title">update booking at this event</h1>
            <UpdateBookingForm />
            <button
              className="close_modal_button button_purple"
              onClick={toggleUpdateBookingModal}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBookingModal;
