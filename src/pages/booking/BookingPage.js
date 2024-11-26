import { useReducer } from "react";
import BookingForm from "../../components/booking-form/BookingForm";
import "./BookingPage.css";

const fetchApi = window.fetchApi;

async function initializeTimes(initialAvaliableTimes) {
  return [
    ...initialAvaliableTimes,
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

const updateTimes = (state, action) => {
  console.log("fetchApi", fetchApi);
  const response = fetchApi(new Date());
  return response;
};

export default function BookingPage() {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div className="container">
      <BookingForm availableTimes={availableTimes} onDateChange={updateTimes} />
    </div>
  );
}
