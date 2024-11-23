import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <h1>
        <a className="logo" href="/">
          <img src="/assets/Logo.svg" alt="Little Lemon" />
        </a>
      </h1>
      <Navbar />
    </header>
  );
}
