import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  // Mock data for available times
  const mockAvailableTimes = {
    availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
  };

  const setup = () =>
    render(<BookingForm availableTimes={mockAvailableTimes.availableTimes} />);

  test("Renders the BookingForm heading", () => {
    setup();
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Should handle availabeTimes", () => {
    setup();
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });
});
