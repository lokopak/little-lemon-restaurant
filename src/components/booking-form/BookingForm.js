import { useState } from "react";
import Button from "../button/Button";
import "./BookingForm.css";

export default function BookingForm({ availableTimes, onDateChange }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  function updateDate(date) {
    setDate(date);
    onDateChange(date);
  }

  return (
    <form className="booking-form">
      <h3 className="text-primary">Book Now</h3>
      <div className="booking-form-row">
        <label htmlFor="res-date">Choose date</label>
        <input
          className="booking-form-imput"
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          onChange={($event) => updateDate($event.target.value)}
        />
      </div>
      <div className="booking-form-row">
        <label htmlFor="res-time">Choose time</label>
        <select
          className="booking-form-imput"
          id="res-time"
          value={time}
          onChange={($event) => setTime($event.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="booking-form-row">
        <label htmlFor="guests">Number of guests</label>
        <input
          className="booking-form-imput"
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={($event) => setGuests($event.target.value)}
        />
      </div>
      <div className="booking-form-row">
        <label htmlFor="occasion">Occasion</label>
        <select
          className="booking-form-imput"
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={($event) => setOccasion($event.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <div className="booking-form-row">
        <Button
          type="submit"
          label={"Make your reservation"}
          color={"accent"}
        />
      </div>
    </form>
  );
}
