import { useReducer } from "react";
import { fetchAPI } from "../../api/api";
import BookingForm from "../../components/booking-form/BookingForm";
import "./BookingPage.css";

export default function BookingPage() {
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div className="container">
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
      />
    </div>
  );
}
