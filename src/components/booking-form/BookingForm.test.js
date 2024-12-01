import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Should handle availabeTimes", () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });
});
