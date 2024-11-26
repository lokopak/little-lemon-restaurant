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
    hasMenu: true,
  },
  {
    name: "about",
    label: "About",
    url: "/about",
    element: AboutPage,
    hasMenu: true,
  },
  {
    name: "menu",
    label: "Menu",
    url: "/menu",
    element: MenuPage,
    hasMenu: true,
  },
  {
    name: "booking",
    label: "Reservations",
    url: "/booking",
    element: BookingPage,
    hasMenu: true,
  },
  {
    name: "order_online",
    label: "Order Online",
    url: "/order-online",
    element: OrderOnlinePage,
    hasMenu: true,
  },
  {
    name: "login",
    label: "Login",
    url: "/login",
    element: Login,
    hasMenu: true,
  },
];
