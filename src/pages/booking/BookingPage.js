import { useEffect, useState } from "react";
import BookingForm from "../../components/booking-form/BookingForm";
import "./BookingPage.css";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(
    () =>
      setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
    []
  );

  return (
    <div className="container">
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
}
