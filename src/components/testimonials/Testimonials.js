import "./Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    id: 1,
    author: "Albert M Bradley",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facere minus distinctio quasi velit recusandae magnam adipisci",
    image: "/assets/images/albert-bradley.jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Bo B Rish",
    comment:
      "Aliquid totam atque omnis veniam eaque architecto quia consequuntur optio impedit? Laborum voluptas pariatur laboriosam minus ipsum delectus!",
    image: "/assets/images/bo-rish.jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Lynda S Nielsen",
    comment:
      "Porro autem velit obcaecati provident, aut expedita error dolorum excepturi cupiditate numquam rerum ad, aspernatur minus.",
    image: "/assets/images/lynda-nielsen.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="flex-column">
          <div className="testimonials-heading">
            <h3>Testimonials</h3>
          </div>
          <div className="testimonials-content">
            {testimonials.map((item) => (
              <TestimonialsCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
