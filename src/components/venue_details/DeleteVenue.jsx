import { useNavigate, useParams } from "react-router-dom";
import { VenuesUrl } from "../../constants/Url";
import { accessToken } from "../../storage/profile/accessToken";
import { ProfileName } from "../../storage/profile/profile";

const DeleteVenue = () => {
  const params = useParams();
  const DeleteVenueUrl = VenuesUrl + params.id;
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
      const response = await fetch(DeleteVenueUrl, deleteOptions);
      console.log("Response :", response);

      if (response.ok) {
        console.log("Result Success delete:", response);
        alert(`${ProfileName} You have successfully deleted this venue!`);
        navigate(`/profile`);
        window.location.reload(true);
      } else {
        console.log("Response Error DeleteRequest: ", response);
      }
    } catch (error) {
      console.log("Catch Error Register delete: ", error);
    }
  }

  return (
    <button
      className="button_purple delete_venue_button"
      onClick={deleteRequest}
    >
      Delete Venue
    </button>
  );
};

export default DeleteVenue;
