import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 0);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={[scrolled ? "scrolled" : "", isOpen ? "menu-open" : ""].join(
        " "
      )}
    >
      <div className="container">
        <div className="logo">
          <h1>
            <img src={Logo} alt="Little Lemon" />
          </h1>
        </div>
        <Navbar />
        <Button className="menu-toggle" type="button" onClick={toggle} icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
