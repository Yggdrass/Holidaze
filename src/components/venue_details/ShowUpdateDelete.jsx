import { load } from "../storage/load";
import DeleteVenue from "./DeleteVenue";
import UpdateVenueModal from "../modals/UpdateVenueModal";

const ShowUpdateDelete = () => {
  const profile = load("profile");
  //console.log("Profile: ", profile);

  const profileEmail = profile.email;
  //console.log("Profile Email: ", profileEmail);

  const venue = load("venue_details");
  //console.log("Venue: ", venue);

  const venueOwner = venue.owner;
  //console.log("Venue Owner: ", venueOwner);

  const venueOwnerEmail = venueOwner.email;
  //console.log("Venue Owner Email: ", venueOwnerEmail);

  return (
    <>
      {profileEmail === venueOwnerEmail ? (
        <DeleteVenue />
      ) : (
        "This is not your venue. You are not authorized to delete this one"
      )}
      {profileEmail === venueOwnerEmail ? (
        <UpdateVenueModal />
      ) : (
        "This is not your venue. You are not authorized to update this one"
      )}
    </>
  );
};

export default ShowUpdateDelete;
