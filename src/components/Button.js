import "./Button.css";

export default function Button(props) {
  function getClassByColor() {
    return props.color ? `button-${props.color}` : "";
  }

  return (
    <button type="button" className={`button ${getClassByColor()}`}>
      {props.label}
    </button>
  );
}
