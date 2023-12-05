import { useState } from "react";
import dayjs from "dayjs";
import { Alert, Calendar } from "antd";

const VenueCalendar = ({ DateFrom, DateTo }) => {
  const [value, setValue] = useState(() => dayjs(new Date()));
  const [selectedValue, setSelectedValue] = useState(() => dayjs(""));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  console.log("DateFrom: ", DateFrom);
  console.log("DateTo: ", DateTo);

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const bookedDates = () => ({
    disabledDates: () => range(DateFrom, DateTo),
  });

  return (
    <>
      <h2 className="calendar_title">Calendar</h2>
      <Calendar
        className="calendar"
        value={value}
        format="YYYY-MM-DD"
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        disabledDate={(date) => {
          if (new Date(date).getDate() === bookedDates) {
            return true;
          } else if (new Date(date).getDate() < new Date().getDate()) {
            return true;
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
