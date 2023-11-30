import { DatePicker, Space } from "antd";
import RangePicker from "rc-picker/lib/RangePicker";
import React from "react";

const DatePickerRange = () => {
  return (
    <>
      <DatePicker.RangePicker value={value} />
    </>
  );
};

export default DatePickerRange;
