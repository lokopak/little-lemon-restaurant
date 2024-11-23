import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import Hompage from "../pages/Homepage";
import MenuPage from "../pages/MenuPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";

const MENU_ITEMS = [
  {
    name: "home",
    label: "Home",
    url: "/",
    element: <Hompage />,
  },
  {
    name: "about",
    label: "About",
    url: "/about",
    element: <AboutPage />,
  },
  {
    name: "menu",
    label: "Menu",
    url: "/menu",
    element: <MenuPage />,
  },
  {
    name: "booking",
    label: "Reservations",
    url: "/booking",
    element: <BookingPage />,
  },
  {
    name: "order_online",
    label: "Order Online",
    url: "/order-online",
    element: <OrderOnlinePage />,
  },
  {
    name: "login",
    label: "Login",
    url: "/login",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          {MENU_ITEMS.map((item) => (
            <li>
              <Link to={item.url} key={item.name}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {MENU_ITEMS.map((item) => (
          <Route path={item.url} element={item.element} />
        ))}
      </Routes>
    </>
  );
}
