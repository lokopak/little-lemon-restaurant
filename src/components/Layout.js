import { Outlet, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../app.routes";
import Footer from "./Footer";
import Header from "./Header";

function defineRoutes() {
  return APP_ROUTES.map((item) => (
    <Route path={item.url} element={<item.element />} key={item.name} />
  ));
}

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routes>{defineRoutes()}</Routes>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
