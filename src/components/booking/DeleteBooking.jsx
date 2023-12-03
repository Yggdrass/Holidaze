import { useNavigate, useParams } from "react-router-dom";
import { BookingsUrl } from "../../constants/Url";
import { load } from "../storage/load";

const DeleteBooking = () => {
  const profile = load("profile");
  //console.log("Profile delete: ", profile);

  const AuthToken = profile.accessToken;
  //console.log("Auth Token delete: ", AuthToken);

  const params = useParams();
  console.log("Params: ", params);
  const deleteBookingUrl = BookingsUrl + params.id;
  console.log("deleteBookingUrl", deleteBookingUrl);

  const navigate = useNavigate();

  async function deleteRequest() {
    const deleteOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(deleteBookingUrl, deleteOptions);
      console.log("Response :", response);

      if (response.ok) {
        console.log("Result Success delete:", response);
        alert(`${profile.name} You have successfully deleted this booking!`);
        navigate(`/profile`);
        window.location.reload(true);
      } else {
        console.log("Response Result Error delete");
      }
    } catch (error) {
      console.log("Catch Error Register delete: ", error);
    }
  }

  return <button onClick={deleteRequest}>Delete Booking</button>;
};

export default DeleteBooking;
