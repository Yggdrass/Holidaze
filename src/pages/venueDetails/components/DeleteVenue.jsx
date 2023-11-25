import { load } from "../../../components/storage/load";
import { useNavigate, useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../../components/auth/constants/Url";

const DeleteVenue = () => {
  const profile = load("profile");
  console.log("Profile delete: ", profile);

  const AuthToken = profile.accessToken;
  console.log("Auth Token delete: ", AuthToken);

  const params = useParams();
  console.log("Params delete: ", params);

  const VenuesUrl = Venues_Details_Url;
  console.log("Venues Url delete: ", VenuesUrl);

  const DeleteVenueUrl = VenuesUrl + params.id;
  console.log("Delete Venue Url: ", DeleteVenueUrl);

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
      const response = await fetch(DeleteVenueUrl, deleteOptions);
      console.log("Response :", response);

      if (response.ok) {
        console.log("Result Success delete:", response);
        alert(`${profile.name} You have successfully deleted this venue!`);
        navigate(`/profile`);
        window.location.reload(true);
      } else {
        console.log("Response Result Error delete");
      }
    } catch (error) {
      console.log("Catch Error Register delete: ", error);
    }
  }

  return <button onClick={deleteRequest}>Delete Venue</button>;
};

export default DeleteVenue;
