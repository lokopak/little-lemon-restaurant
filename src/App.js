import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hompage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hompage />
      </main>
      <Footer />
    </>
  );
}

export default App;
