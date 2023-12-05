import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VenueCard from "../../components/cards/VenueCard";
import { useEffect, useState } from "react";
import { All_Venues_Url } from "../../constants/Url";

const Venues = () => {
  const AllVenuesUrl = All_Venues_Url;
  const [venues, setVenues] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );
  console.log("Filtered venues: ", venues);

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setIsDropdownOpen(event.target.value !== "");
  };

  useEffect(() => {
    fetch(AllVenuesUrl).then((res) =>
      res.json().then((json) => {
        setVenues(json);
        //console.log("setVenues:", json);
      })
    );
  }, []);

  //console.log("Venues Set:", venues);

  const ShowVenues = () => {
    if (filteredVenues.length > 0) {
      return (
        <ul className="search_results">
          {venues.sort().map((item) => (
            <VenueCard key={item.id} item={item}></VenueCard>
          ))}
        </ul>
      );
    } else {
      <p>No venues found</p>;
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
      {isDropdownOpen && filteredVenues.length > 0 ? (
        <ul className="search_results">
          {filteredVenues.splice(0, 5).map((item) => (
            <VenueCard key={item.id} item={item}></VenueCard>
          ))}
        </ul>
      ) : (
        <ul>
          {filteredVenues.length === 0 && searchText !== "" ? (
            <p>No venues found</p>
          ) : (
            ""
          )}
        </ul>
      )}
    </main>
  );
};

export default Venues;
