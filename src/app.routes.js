import AboutPage from "./pages/about/AboutPage";
import BookingPage from "./pages/booking/BookingPage";
import Hompage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import MenuPage from "./pages/menu/MenuPage";
import OrderOnlinePage from "./pages/order-online/OrderOnlinePage";

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
