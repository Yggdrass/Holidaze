import { VenuesUrl } from "../../../components/auth/constants/Url";
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
import { load } from "../../../components/storage/load";

const CreateVenueForm = () => {
  const [createdVenue, setCreatedVenue] = useState("");
  console.log("Created Venue from form:", createdVenue);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [price, setPrice] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const fetchVenueUrl = VenuesUrl;
  //console.log("fetchVenueUrl: ", fetchVenueUrl);

  const handleCreateVenueForm = (e) => {
    e.preventDefault();
    let regobj = {
      name,
      description,
      media,
      price,
      maxGuests,
      wifi,
      parking,
      breakfast,
      pets,
      address,
      city,
      country,
    };
    //console.log("Register Object :", regobj);

    const profile = load("profile");
    //console.log("Profile:", profile);

    const AuthToken = profile.accessToken;
    //console.log("Authenticate Token: ", AuthToken);

    async function createVenue() {
      const postData = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AuthToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(fetchVenueUrl, postData);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result:", result.errors);

        if (response.ok) {
          setCreatedVenue(result);
          console.log("Result Errors:", result);
          alert(
            `${profile.name} You have successfully created your venue ${result.name}!`
          );
          window.location.reload(true);
        } else {
          alert("Error! Login failed!");
        }
      } catch (error) {
        console.log("Catch Error Register: ", error);
      }
    }
    createVenue();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleCreateVenueForm}>
        <div>
          <h2>general</h2>
          {/*---- Venue Name Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUser} className="create_venue_icon" />
              <label htmlFor="name">venue name</label>
            </div>
            <input
              type="text"
              id="name"
              placeholder="Type a venue title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/*---- Media Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faImage} className="create_venue_icon" />
              <label htmlFor="media">media</label>
            </div>
            <input
              type="text"
              id="media"
              placeholder="Url"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
            />
          </div>

          {/*---- Price Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="create_venue_icon"
              />
              <label htmlFor="price">price</label>
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          {/*---- Max Guests Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUsers} className="create_venue_icon" />
              <label htmlFor="maxGuests">max guests</label>
            </div>
            <input
              type="number"
              id="maxGuests"
              value={maxGuests}
              onChange={(e) => setMaxGuests(Number(e.target.value))}
            />
          </div>

          {/*---- Description Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUser} className="create_venue_icon" />
              <label htmlFor="description">Venue description</label>
            </div>
            <input
              type="textarea"
              id="description"
              placeholder="Type a venue title"
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
              <FontAwesomeIcon icon={faCutlery} className="create_venue_icon" />
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
              <FontAwesomeIcon icon={faPaw} className="create_venue_icon" />
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
              <FontAwesomeIcon icon={faCar} className="create_venue_icon" />
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
              <FontAwesomeIcon icon={faCutlery} className="create_venue_icon" />
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
              <FontAwesomeIcon icon={faHouse} className="create_venue_icon" />
              <label htmlFor="address">address</label>
            </div>
            <input
              type="text"
              id="address"
              placeholder="Type and address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/*---- City Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faCity} className="create_venue_icon" />
              <label htmlFor="city">city</label>
            </div>
            <input
              type="text"
              id="city"
              placeholder="Type a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/*---- Country Input ----*/}
          <div className="input-div">
            <div className="label-div">
              <FontAwesomeIcon icon={faUsers} className="create_venue_icon" />
              <label htmlFor="country">country</label>
            </div>
            <input
              type="text"
              id="country"
              placeholder="Type a country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="button_green register_form_submit">
          create venue
        </button>
      </form>
    </div>
  );
};

export default CreateVenueForm;
