import { useNavigate, useParams } from "react-router-dom";
import { BookingsUrl } from "../../constants/Url";

const DeleteBooking = () => {
  const params = useParams();
  const profile = load("profile");
  const accessToken = profile.accessToken;
  const ProfileName = profile.name;
  const deleteBookingUrl = BookingsUrl + params.id;

  const navigate = useNavigate();

  async function deleteRequest() {
    const deleteOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(deleteBookingUrl, deleteOptions);

      if (response.ok) {
        alert(`${ProfileName} You have successfully deleted this booking!`);
        navigate(`/profile`);
        window.location.reload(true);
      } else {
        console.log("Response Result Error delete", response);
      }
    } catch (error) {
      console.log("Catch Error Register delete: ", error);
    }
  }

  return (
    <button
      className="button_purple delete_booking_button"
      onClick={deleteRequest}
    >
      Delete Booking
    </button>
  );
};

export default DeleteBooking;
