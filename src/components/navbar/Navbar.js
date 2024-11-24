import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../app.routes";
import "./Navbar.css";

function renderLinks() {
  return APP_ROUTES.map((item) => (
    <li key={item.name}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  ));
}

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <ul>{renderLinks()}</ul>
      </nav>
    </>
  );
}
