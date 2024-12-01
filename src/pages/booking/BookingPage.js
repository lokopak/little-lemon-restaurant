import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../../api/api";
import { APP_ROUTES } from "../../app.routes";
import BookingForm from "../../components/booking-form/BookingForm";
import Modal from "../../components/modal/Modal";
import "./BookingPage.css";

export default function BookingPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

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

  const handleFormSubmit = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate(APP_ROUTES.find((route) => route.name === "home").url || "/");
  };

  return (
    <>
      <div className="container">
        <BookingForm
          onFormSubmit={handleFormSubmit}
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
        />
      </div>

      {isModalVisible && (
        <Modal
          onClose={handleModalClose}
          title="Boocking completed!"
          description="Then you ofr choosing Little Lemon! Your booking has been successfully made. You will recive a confimation mail with the details fo your booking. We are excited to see you soon!"
        />
      )}
    </>
  );
}
