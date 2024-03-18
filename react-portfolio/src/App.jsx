import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/resume":
      Component = Resume;
      break;
    case "/contact-page":
      Component = ContactPage;
      break;
    default:
      Component = Home;
  }

  if (!Component) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
