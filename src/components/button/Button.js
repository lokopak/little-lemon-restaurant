import "./Button.css";

export default function Button({
  color,
  type,
  label,
  onClick,
  className,
  children,
  icon,
}) {
  function getClassByColor() {
    return color ? `button-${color}` : "";
  }

  return (
    <button
      type={type ? type : "button"}
      className={`button ${className} ${getClassByColor()} ${
        icon ? "button-icon" : ""
      }`}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
}
