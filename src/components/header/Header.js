import Navbar from "../navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <img src="/assets/Logo.svg" alt="Little Lemon" />
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
