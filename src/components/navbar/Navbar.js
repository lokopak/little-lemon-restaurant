import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../app.routes";
import "./Navbar.css";

export default function Navbar() {
  function renderLinks() {
    return APP_ROUTES.filter((item) => item.hasMenu).map((item) => (
      <li key={item.name}>
        <Link to={item.url}>{item.label}</Link>
      </li>
    ));
  }

  return (
    <>
      <nav id="main-nav" className="main-nav">
        <ul>{renderLinks()}</ul>
      </nav>
    </>
  );
}
