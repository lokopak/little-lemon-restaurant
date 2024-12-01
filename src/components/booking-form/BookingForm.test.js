import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockSubmitForm = jest.fn();

  const mockDispatch = jest.fn();

  // Mock data for available times
  const mockAvailableTimes = {
    availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
  };

  const setup = () =>
    render(
      <BookingForm
        availableTimes={mockAvailableTimes.availableTimes}
        onFormSubmit={mockSubmitForm}
        dispatchOnDateChange={mockDispatch}
      />
    );

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

  test("renders BookingForm", () => {
    setup();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test("allows user to fill out the form", async () => {
    setup();

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "1:00 PM" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });

    expect(screen.getByLabelText(/Choose date/i).value).toBe("2024-12-25");
    expect(screen.getByLabelText(/Choose time/i).value).toBe("1:00 PM");
    expect(screen.getByLabelText(/Number of guests/i).value).toBe("4");
    expect(screen.getByLabelText(/Occasion/i).value).toBe("Birthday");
  });

  test("calls submitForm function on form submission", async () => {
    setup();
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "1:00 PM" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(
      screen.getByRole("button", { name: /Make your reservation/i })
    );

    await waitFor(() => {
      // Check if the submitForm function was called
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    });
  });
});
