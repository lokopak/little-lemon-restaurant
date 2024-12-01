import { Field, Form, Formik } from "formik";
import { useState } from "react";
import Button from "../button/Button";
import "./BookingForm.css";

export default function BookingForm({
  onFormSubmit,
  availableTimes,
  dispatchOnDateChange,
}) {
  const defaultTime = availableTimes[0];

  const [formValues, setFormValues] = useState({
    resDate: "",
    resTime: defaultTime,
    guests: "",
    occasion: "",
  });

  function updateDate(date) {
    if (date) {
      dispatchOnDateChange(date);
    }
    setFormValues({ ...formValues, resDate: date });
  }

  const validateGuests = (guests) => {
    if (!guests) {
      return "Required";
    }
    if (guests < 1 || guests > 10) {
      return "Gusts must be between 1 and 10";
    }
    return null;
  };

  const validateDate = (value) => {
    const isValid = !value ? "Required" : null;
    if (isValid === null) {
      updateDate(value);
    }
    return isValid;
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values) => onFormSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form className="booking-form">
          <h3 className="text-primary">Book Now</h3>
          <div className="booking-form-row">
            <label htmlFor="resDate">Choose date</label>
            <Field
              className={[
                "booking-form-input",
                errors.resDate && touched.resDate ? "has-error" : "",
              ].join(" ")}
              type="date"
              id="resDate"
              name="resDate"
              validate={validateDate}
            />
            {errors.resDate && touched.resDate ? (
              <div className="booking-form-error">{errors.resDate}</div>
            ) : null}
          </div>
          <div className="booking-form-row">
            <label htmlFor="resTime">Choose time</label>
            <Field
              component="select"
              className={[
                "booking-form-input",
                errors.resTime && touched.resTime ? "has-error" : "",
              ].join(" ")}
              id="resTime"
              name="resTime"
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </Field>
            {errors.resTime && touched.resTime ? (
              <div className="booking-form-error">{errors.resTime}</div>
            ) : null}
          </div>
          <div className="booking-form-row">
            <label htmlFor="guests">Number of guests</label>
            <Field
              className={[
                "booking-form-input",
                errors.guests && touched.guests ? "has-error" : "",
              ].join(" ")}
              type="number"
              id="guests"
              name="guests"
              validate={validateGuests}
            />
            {errors.guests && touched.guests ? (
              <div className="booking-form-error">{errors.guests}</div>
            ) : null}
          </div>
          <div className="booking-form-row">
            <label htmlFor="occasion">Occasion</label>
            <Field
              component="select"
              className={[
                "booking-form-input",
                errors.occasion && touched.occasion ? "has-error" : "",
              ].join(" ")}
              id="occasion"
              name="occasion"
            >
              <option value="">Select an Option</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            {errors.occasion && touched.occasion ? (
              <div className="booking-form-error">{errors.occasion}</div>
            ) : null}
          </div>
          <div className="booking-form-row">
            <Button
              type="submit"
              label={"Make your reservation"}
              color={"accent"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
