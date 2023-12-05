import { load } from "../../storage/load";

const VenueMedia = () => {
  const venue = load("venue_details");
  const venueMedia = venue.media;

  return (
    <div className="carousel_wrapper">
      {venueMedia.map((image, i) => {
        return (
          <img
            src={image}
            key={i}
            alt="Images from the location of the venue"
          />
        );
      })}
    </div>
  );
};

export default VenueMedia;
