const MENU_ITEMS = [
  {
    name: "home",
    label: "Home",
  },
  {
    name: "about",
    label: "About",
  },
  {
    name: "menu",
    label: "Menu",
  },
  {
    name: "reservations",
    label: "Rservations",
  },
  {
    name: "order-online",
    label: "Order Online",
  },
  {
    name: "login",
    label: "Login",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          {MENU_ITEMS.map((item) => (
            <li>
              <a href={`/${item.name}`} key={item.name}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
