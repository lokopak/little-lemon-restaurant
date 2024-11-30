import { Link } from "react-router-dom";
import "./Footer.css";

const FOOTER_LINKS = [
  {
    name: "home",
    to: "/",
    label: "Home",
  },
  {
    name: "about",
    to: "/about",
    label: "About",
  },
  {
    name: "menu",
    to: "/menu",
    label: "Menu",
  },
  {
    name: "reservations",
    to: "/reservations",
    label: "Reservations",
  },
  {
    name: "order-online",
    to: "/order-online",
    label: "Order Online",
  },
  {
    name: "login",
    to: "/login",
    label: "Login",
  },
];

const SOCIALS = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: "facebook.svg",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: "instagram.svg",
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: "x-twitter.svg",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-row footer-logo">
          <img src="/assets/Logo.svg" alt="Little Lemon"></img>
        </div>
        <div className="footer-row footer-social">
          {SOCIALS.map((item) => (
            <a
              className="footer-item"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={item.label}
            >
              <img src={`/assets/icons/${item.icon}`} alt={item.label} />
            </a>
          ))}
        </div>
        <div className="footer-row footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          {FOOTER_LINKS.map((link) => (
            <Link className="footer-item" to={link.to} key={link.name}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-row footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> 123 Citrus Lane</p>
          <p className="footer-item"> 123-456-7890</p>
          <p className="footer-item"> little.lemon@lemon.com</p>
        </div>
      </div>
    </footer>
  );
}
