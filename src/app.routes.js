import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import Hompage from "./pages/Homepage";
import Login from "./pages/Login";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";

export const APP_ROUTES = [
  {
    name: "home",
    label: "Home",
    url: "/",
    element: Hompage,
  },
  {
    name: "about",
    label: "About",
    url: "/about",
    element: AboutPage,
  },
  {
    name: "menu",
    label: "Menu",
    url: "/menu",
    element: MenuPage,
  },
  {
    name: "booking",
    label: "Reservations",
    url: "/booking",
    element: BookingPage,
  },
  {
    name: "order_online",
    label: "Order Online",
    url: "/order-online",
    element: OrderOnlinePage,
  },
  {
    name: "login",
    label: "Login",
    url: "/login",
    element: Login,
  },
];
