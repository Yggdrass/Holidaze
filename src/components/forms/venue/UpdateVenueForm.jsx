import { VenuesUrl } from "../../../constants/Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMoneyBill1,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCar,
  faCity,
  faCutlery,
  faHouse,
  faPaw,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateVenueForm = (Venue) => {
  const venue = Venue.Venue;
  console.log("Venue Form: ", venue);
  const venueName = venue.name;
  console.log(venueName);

  const venueDescription = venue.description;
  const venueMedia = venue.media;
  const venuePrice = venue.price;
  const venueMaxGuests = venue.maxGuests;

  let venueMeta = venue.meta;
  let venueWifi = venueMeta.wifi;
  let venueParking = venueMeta.parking;
  let venueBreakfast = venueMeta.breakfast;
  let venuePets = venueMeta.pets;

  const venueLocation = venue.location;
  const venueAddress = venueLocation.address;
  const venueCity = venueLocation.city;
  const venueCountry = venueLocation.country;

  const profile = load("profile");
  const accessToken = profile.accessToken;
  const ProfileName = profile.name;

  const [name, setName] = useState(venueName);
  const [description, setDescription] = useState(venueDescription);
  const [media, setMedia] = useState(venueMedia);
  const [price, setPrice] = useState({ venuePrice });
  const [maxGuests, setMaxGuests] = useState({ venueMaxGuests });
  const [wifi, setWifi] = useState(venueWifi);
  const [parking, setParking] = useState(venueParking);
  const [breakfast, setBreakfast] = useState(venueBreakfast);
  const [pets, setPets] = useState(venuePets);
  const [address, setAddress] = useState(venueAddress);
  const [city, setCity] = useState(venueCity);
  const [country, setCountry] = useState(venueCountry);
  const [createdVenue, setCreatedVenue] = useState("");
  console.log("Created Venue from form:", createdVenue);

  const params = useParams();
  const updateVenueUrl = VenuesUrl + params.id;

  const handleUpdateVenueForm = (e) => {
    e.preventDefault();
    let regobj = {
      name,
      description,
      media,
      price,
      maxGuests,
      meta: { wifi, parking, breakfast, pets },

      location: { address, city, country },
    };

    async function updateVenue() {
      const postData = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(updateVenueUrl, postData);
        const result = await response.json();

        if (response.ok) {
          setCreatedVenue(result);
          alert(
            `${ProfileName} You have successfully updated your venue ${result.name}!`
          );
          window.location.reload(true);
        } else {
          alert("Error! update venue failed!");
        }
      } catch (error) {
        console.log("Catch Error Register: ", error);
      }
    }
    updateVenue();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleUpdateVenueForm}>
        <div>
          <h2>general</h2>
          {/*---- Venue Name Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="name">venue name</label>
            </div>
            <input
              type="text"
              id="name"
              placeholder={venueName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/*---- Media Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faImage} />
              <label htmlFor="media">media</label>
            </div>
            <input
              type="text"
              id="media"
              placeholder={venueMedia}
              value={media}
              onChange={(e) => setMedia(e.target.value)}
            />
          </div>

          {/*---- Price Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faMoneyBill1} />
              <label htmlFor="price">price</label>
            </div>
            <input
              type="number"
              id="price"
              placeholder={venuePrice}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          {/*---- Max Guests Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUsers} />
              <label htmlFor="maxGuests">max guests</label>
            </div>
            <input
              type="number"
              id="maxGuests"
              placeholder={venueMaxGuests}
              value={maxGuests}
              onChange={(e) => setMaxGuests(Number(e.target.value))}
            />
          </div>

          {/*---- Description Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="description">Venue description</label>
            </div>
            <input
              type="textarea"
              id="description"
              placeholder={venueDescription}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>facilities</h2>

          {/*---- Check Breakfast Included ----*/}
          <div className="form-check input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faCutlery} />
              <label className="form-check-label" htmlFor="breakfast">
                breakfast
              </label>
            </div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="breakfast"
              checked={breakfast}
              onChange={() => setBreakfast(!breakfast)}
            ></input>
          </div>

          {/*---- Check Pets Included ----*/}
          <div className="form-check input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faPaw} />
              <label className="form-check-label" htmlFor="pets">
                pets
              </label>
            </div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="pets"
              checked={pets}
              onChange={() => setPets(!pets)}
            ></input>
          </div>

          {/*---- Check parking Included ----*/}
          <div className="form-check input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faCar} />
              <label className="form-check-label" htmlFor="parking">
                parking
              </label>
            </div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="parking"
              checked={parking}
              onChange={() => setParking(!parking)}
            ></input>
          </div>

          {/*---- Check Wifi Included ----*/}
          <div className="form-check input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faCutlery} />
              <label className="form-check-label" htmlFor="wifi">
                wifi
              </label>
            </div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="wifi"
              checked={wifi}
              onChange={() => setWifi(!wifi)}
            ></input>
          </div>
        </div>

        <div>
          <h2>location</h2>

          {/*---- Address Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faHouse} />
              <label htmlFor="address">address</label>
            </div>
            <input
              type="text"
              id="address"
              placeholder={venueAddress}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/*---- City Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faCity} />
              <label htmlFor="city">city</label>
            </div>
            <input
              type="text"
              id="city"
              placeholder={venueCity}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/*---- Country Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUsers} />
              <label htmlFor="country">country</label>
            </div>
            <input
              type="text"
              id="country"
              placeholder={venueCountry}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="button_green register_form_submit">
          update venue
        </button>
      </form>
    </div>
  );
};

export default UpdateVenueForm;
