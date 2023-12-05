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
import { accessToken } from "../../../storage/profile/accessToken";
import { ProfileName } from "../../../storage/profile/profile";

const CreateVenueForm = () => {
  const [createdVenue, setCreatedVenue] = useState("");
  console.log("Created Venue from form:", createdVenue);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCreateVenueForm = (e) => {
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

    async function createVenue() {
      const postData = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(VenuesUrl, postData);
        const result = await response.json();

        if (response.ok) {
          setCreatedVenue(result);
          alert(
            `${ProfileName} You have successfully created your venue ${result.name}!`
          );
          window.location.reload(true);
        } else {
          alert("Error! You failed to create the venue!");
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
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="name">venue name</label>
            </div>
            <input
              type="text"
              id="name"
              placeholder="Type a venue title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input_required"
            />
            <span className="invalid-feedback">required</span>
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
              placeholder="Url"
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
              placeholder="Set a price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
            <span className="input_error"></span>
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
              placeholder="Choose amount of guests"
              value={maxGuests}
              onChange={(e) => setMaxGuests(Number(e.target.value))}
              required
            />
            <span className="input_error"></span>
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
              placeholder="Type a venue title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span className="input_error"></span>
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
              placeholder="Type and address"
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
              placeholder="Type a city"
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
