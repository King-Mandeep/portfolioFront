// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contact";
// import { About } from "./pages/About";
// import { Skills } from "./pages/Skills";

// import { useState, useEffect } from "react";
// import { Projects } from "./pages/Projects";

// const App=()=>{
//    const [theme,setTheme]=useState("white");
//     const handleThemeChange=(value)=>{
//       setTheme(value);
//     }
//   return(
//     <div id="wrapper">
//       <Navbar value={theme}/>
//       <section id="home">
//         <Home handleThemeChange={handleThemeChange} value={theme} />
//       </section>
//       <section id="skills">
//         <Skills value={theme} />
//       </section>
     
      
//       <section><Projects value={theme}></Projects></section>
//       <section id="contact">
//         <Contact value={theme}/>
//       </section>
//       <section id="about">
//         <About />
//       </section>
      
//     </div>
//   )
// }
// export default App;


// App.jsx
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { HireForm } from "./pages/HireMeform";

const App = () => {
  return (
   
      <Routes>
        {/* MainLayout wraps your always-visible content */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested route to render Form inside MainLayout */}
          <Route path="form" element={<HireForm/>} />
        </Route>
      </Routes>
     
   
  );
};

export default App;




