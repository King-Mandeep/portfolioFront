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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { HireForm } from "./pages/HireMeform";
import { Layout } from "./pages/layout";
import { Skills } from "./pages/Skills";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { ThemeContext } from "styled-components";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes/allthemes";
const router=createBrowserRouter([
{
  path:"/",element:<Layout/>,
  children:[
{
  path:"/",element: <Home></Home>
},
{
  path:"/skills",element: <Skills></Skills>
},
{
  path:"/projects",element: <Projects></Projects>
},
{
  path:"/contact",element: <Contact></Contact>
}

  ]
},
{
  path:"/hireme",element:  <HireForm></HireForm>
}

])

const App = () => {
  const [theme,setTheme]=useState("dark");
  const applyTheme=(themeObject)=>{
  const root=document.documentElement;
  for(let key in themeObject){
    root.style.setProperty(key,themeObject[key]);
  }
  };
  const handleThemeChange=(selectedTheme)=>{
    setTheme(selectedTheme);
    if(selectedTheme==="dark"){
      applyTheme(darkTheme);
    }
    else{
      applyTheme(lightTheme);
    }
  };
  useEffect(()=>{
handleThemeChange(theme);
      },[]);
  return (
   
      // <Routes>
      //   {/* MainLayout wraps your always-visible content */}
      //   <Route path="/" element={<MainLayout />}>
      //     {/* Nested route to render Form inside MainLayout */}
      //     <Route path="form" element={<HireForm/>} />
      //   </Route>
      // </Routes>
      <ThemeContext.Provider value={{theme,setTheme:handleThemeChange}}>
     <RouterProvider router={router}/>
     </ThemeContext.Provider>
  
   
  );
};

export default App;




