import React, { useState, useContext, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ContextForm } from "../../Context/ContextForm";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

/**
 * Component that rendenrs a calendar picker in mobile or descktop version
 *
 * @param {{mobile:boolean}} mobile
 * @returns {JSX.Element} renders the calendar picker
 */
function CalendarPicker({ mobile }) {
  const { handleInput, formData } = useContext(ContextForm);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    handleInput("UPDATE_DATES", {
      campo: "startDate",
      valor: startDate,
    });
    handleInput("UPDATE_DATES", {
      campo: "endDate",
      valor: endDate,
    });
  }, [startDate, endDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      monthsShown={mobile ? 1 : 2}
      minDate={new Date()}
      locale="es"
      inline
    />
  );
}

export default CalendarPicker;
