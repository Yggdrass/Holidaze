import { load } from "../storage/load";
import DeleteVenue from "./DeleteVenue";
import UpdateVenueModal from "../modals/UpdateVenueModal";

const ShowUpdateDelete = () => {
  const profile = load("profile");
  console.log("Profile: ", profile);

  const profileEmail = profile.email;
  //console.log("Profile Email: ", profileEmail);

  const venue = load("venue_details");
  //console.log("Venue: ", venue);

  const venueManagerRole = profile.venueManager;
  console.log("Venue Manager Role:", venueManagerRole);

  const venueOwner = venue.owner;
  //console.log("Venue Owner: ", venueOwner);

  const venueOwnerEmail = venueOwner.email;
  //console.log("Venue Owner Email: ", venueOwnerEmail);

  const ShowButtons = () => {
    if (venueManagerRole && profileEmail === venueOwnerEmail) {
      return (
        <div className="update_delete_venue_buttons">
          <DeleteVenue />
          <UpdateVenueModal />
        </div>
      );
    } else if (venueManagerRole && profileEmail !== venueOwnerEmail) {
      return (
        <div>
          This is not your venue, you are not authorized to edit this venue!
        </div>
      );
    } else if (!venueManagerRole) {
      return null;
    }
  };

  return (
    <div className="update_delete_venue_buttons">
      <div>
        <ShowButtons />
      </div>
    </div>
  );
};

export default ShowUpdateDelete;
