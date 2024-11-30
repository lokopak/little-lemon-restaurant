import Button from "../button/Button";
import "./CallToActions.css";

export default function CallToActions() {
  return (
    <div className="call-to-actions">
      <div className="call-to-actions-content">
        <h2 className="text-accent">Little Lemon</h2>
        <h3 className="text-light">Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served width a modern twist.
        </p>
        <Button label={"Reserve a Table"} color={"accent"} />
      </div>
      <div className="call-to-actions-image">
        <img src="/assets/restaurantfood.jpg" alt="Call to actions" />
      </div>
    </div>
  );
}
