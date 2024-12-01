import { Link } from "react-router-dom";
import FacebooIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import XTwitterIcon from "../../assets/icons/x-twitter.svg";
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
    icon: FacebooIcon,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: XTwitterIcon,
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
              <img src={item.icon} alt={item.label} />
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
