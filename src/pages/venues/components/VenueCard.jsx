import "../Venues.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VenueCard = ({ item }) => {
  //console.log("item.id: ", item.id);

  return (
    <div className="venue_card">
      <h2 className="venue_card_title">{item.name}</h2>

      <img src={item.media} className="venue_card_image" />

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faMoneyBill1} className="venue_card_icon" />
        <p className="venue_card_price">{item.price}</p>
      </div>

      <p className="venue_card_description">{item.description}</p>

      <Link to={`${item.id}`} className="venue_card_link">
        Click to view
      </Link>
    </div>
  );
};

export default VenueCard;
