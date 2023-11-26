import { load } from "../../../components/storage/load";

const VenueMedia = () => {
  const venue = load("venue_details");
  //console.log("Venue: ", venue);

  const venueMedia = venue.media;
  //console.log("Venue Media: ", venueMedia);

  return (
    <div className="carousel_wrapper">
      {venueMedia.map((venueMedia, i) => {
        return <img src={venueMedia} key={i} />;
      })}
    </div>
  );
};

export default VenueMedia;
