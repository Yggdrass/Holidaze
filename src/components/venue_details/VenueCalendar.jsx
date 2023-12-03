import { useState } from "react";
import dayjs from "dayjs";
import { Alert, Calendar } from "antd";
import { load } from "../storage/load";

const VenueCalendar = () => {
  const [value, setValue] = useState(() => dayjs(new Date()));
  console.log("Value: ", value);
  const [selectedValue, setSelectedValue] = useState(() => dayjs(""));
  console.log("Selecetd Value: ", selectedValue);
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const venue = load("venue_details");
  console.log("venue: ", venue);

  const venueBookings = venue.bookings;
  console.log("venueBookings: ", venueBookings);

  const renderBookingsDateFrom = venueBookings.map((booking) =>
    booking.dateFrom.slice(0, 10)
  );
  console.log("render Bookings Date From: ", renderBookingsDateFrom);

  const renderBookingsDateTo = venueBookings.map((booking) =>
    booking.dateTo.slice(0, 10)
  );
  console.log("render Bookings Date To: ", renderBookingsDateTo);

  // const range = (start, end) => {
  //   const result = [];
  //   for (let i = start; i < end; i++) {
  //     result.push(i);
  //   }
  //   return result;
  // };

  // const bookedDates = () => ({
  //   disabledDates: () => range(renderBookingsDateFrom, renderBookingsDateTo),
  // });

  return (
    <>
      <Calendar
        value={value}
        format="YYYY-MM-DD"
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        disabledDate={(date) => {
          if (new Date(date).getDate() > 15) {
            return true;
          } else {
            return false;
          }
        }}
      />
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
    </>
  );
};

export default VenueCalendar;
