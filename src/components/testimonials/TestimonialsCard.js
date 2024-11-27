import "./TestimonialsCard.css";
import TestimonialRatings from "./TestimonialsRating";

export default function TestimonialsCard({ item }) {
  return (
    <div className="testimonials-card" key={item.id}>
      <TestimonialRatings rating={item.rating} />
      <div className="testimonials-card-content">
        <img
          className="testimonials-card-picture"
          src={item.image}
          alt={item.author}
          height={50}
          width={50}
        />
        <span className="testimonials-card-author">{item.author}</span>
      </div>
      <p className="testimonials-comment">{item.comment}</p>
    </div>
  );
}
