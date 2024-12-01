export default function TestimonialRatings({ rating }) {
  return (
    <div className="testimonial-ratings">
      {[...Array(rating || 0)].map((_, i) => (
        <span key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}