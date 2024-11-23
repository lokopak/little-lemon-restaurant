import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <img src="/assets/Logo.svg" alt="Little Lemon" />
      </h1>
      <Navbar />
    </header>
  );
}
