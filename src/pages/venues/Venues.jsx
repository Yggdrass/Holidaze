import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VenueCard from "../../components/cards/VenueCard";
import { useEffect, useState } from "react";
import { VenuesUrl } from "../../constants/Url";
import "./Venues.modules.css";

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setIsDropdownOpen(event.target.value !== "");
  };

  useEffect(() => {
    fetch(VenuesUrl).then((res) =>
      res.json().then((json) => {
        setVenues(json);
      })
    );
  }, []);

  const ShowVenues = () => {
    if (filteredVenues.length > 0) {
      return (
        <ul className="search_results">
          {filteredVenues.sort().map((venue) => (
            <VenueCard
              key={venue.id}
              item={venue}
              venueId={venue.id}
              venuePrice={venue.price}
              venueName={venue.name}
              venueDescription={venue.description}
              venueMedia={venue.media}
            ></VenueCard>
          ))}
        </ul>
      );
    } else if (isDropdownOpen & (filteredVenues.length > 0)) {
      return (
        <ul className="search_results">
          {filteredVenues.sort().map((venue) => (
            <VenueCard
              key={venue.id}
              item={venue}
              venueId={venue.id}
              venuePrice={venue.price}
              venueName={venue.name}
              venueDescription={venue.description}
              venueMedia={venue.media}
            ></VenueCard>
          ))}
        </ul>
      );
    } else if (filteredVenues.length === 0 && searchText !== "") {
      return <p>No venues found</p>;
    } else {
      return null;
    }
  };

  return (
    <main className="main_venues">
      <h1 className="search_venues_title">search venues</h1>
      <div className="search_input_group">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="venue_search_icon"
        />
        <input
          name="venues_list_searchInput"
          className="search_venues_input"
          id="venues_list_searchInput"
          type="text"
          placeholder="Search venues by name..."
          value={searchText}
          onChange={handleChange}
        />
      </div>
      <ShowVenues />
    </main>
  );
};

export default Venues;
