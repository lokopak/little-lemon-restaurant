import "./TestimonialsCard.css";
import TestimonialRatings from "./TestimonialsRating";

export default function TestimonialsCard({ item }) {
  return (
    <article className="testimonials-card" key={item.id}>
      <TestimonialRatings rating={item.rating} />
      <figure className="testimonials-card-content">
        <img
          className="testimonials-card-picture"
          src={item.image}
          alt={item.author}
          height={50}
          width={50}
        />
        <span className="testimonials-card-author">{item.author}</span>
      </figure>
      <p className="testimonials-comment">{item.comment}</p>
    </article>
  );
}
