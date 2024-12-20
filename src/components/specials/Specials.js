import "./Specials.css";

export default function Specials(props) {
  return (
    <article className="specials">
      <figure className="specials-image">
        <img src={process.env.PUBLIC_URL + props.item.image} alt="Specials" />
      </figure>
      <div className="specials-content">
        <div className="specials-heading">
          <h4>{props.item.name}</h4>
          <span className="text-secondary">$ {props.item.price}</span>
        </div>
        <p>{props.item.description}</p>
        <div className="specials-footer">
          <a href="/specials" className="link text-bold">
            Order a delivery
            <span>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/motocicle.svg"}
                alt="Delivery"
              />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
