import Button from "../button/Button";
import Specials from "../specials/Specials";
import "./Highlights.css";

export default function Highlights() {
  const specials = [
    {
      id: 1,
      name: "Greek salad",
      image: "/assets/images/greek salad.jpg",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 2,
      name: "Bruchetta",
      image: "/assets/images/bruchetta.png",
      price: 6.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      image: "/assets/images/lemon dessert.jpg",
      price: 5.0,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="highlights">
      <div className="container">
        <div className="flex-column">
          <div className="highlights-heading">
            <h3>This weeks specials!</h3>
            <Button label={"Online Menu"} color={"accent"} />
          </div>
          <div className="highlights-specials">
            {specials.map((item) => (
              <Specials item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
