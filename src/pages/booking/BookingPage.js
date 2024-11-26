import { useReducer } from "react";
import BookingForm from "../../components/booking-form/BookingForm";
import "./BookingPage.css";

async function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

const reducer = (state, action) => {
  return initializeTimes();
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  function updateTimes(times) {
    return dispatch(times);
  }

  return (
    <div className="container">
      <BookingForm availableTimes={availableTimes} onDateChange={updateTimes} />
    </div>
  );
}
