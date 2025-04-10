// MainLayout.jsx
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const MainLayout = () => {
  const [theme, setTheme] = useState("white");

  const handleThemeChange = (value) => {
    setTheme(value);
  };

  return (
    <div id="wrapper">
      <Navbar value={theme} />
      <Outlet />
      <section id="home">
        <Home handleThemeChange={handleThemeChange} value={theme} />
      </section>
      <section id="skills">
        <Skills value={theme} />
      </section>
      <section>
        <Projects value={theme} />
      </section>
      <section id="contact">
        <Contact value={theme} />
      </section>
      <section id="about">
        <About />
      </section>

      {/* This is where nested routes like /form will render */}
     
    </div>
  );
};
