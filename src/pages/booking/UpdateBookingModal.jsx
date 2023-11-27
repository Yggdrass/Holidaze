import { useState } from "react";
import UpdateBookingForm from "./UpdateBookingForm";

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
          <div className="modal-content">
            <h1 className="h1_modal_title">update booking at this event</h1>
            <UpdateBookingForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBookingModal;
