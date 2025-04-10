// import { Link } from "react-router-dom";
// import style from "./Navbar.module.css";
// import { FaMediumM } from "react-icons/fa";
// export const Navbar=()=>{
//     return(
//         <div className={style.container}>
//             <div className={style.navbar}>
//        <div className={style['logo-container']}>
//        {/* <img src="https://img.freepik.com/free-photo/realistic-m-letter-with-bright-lights_23-2150458461.jpg" className={style.logo} alt=""/> */}
//        <FaMediumM style={{ fontSize:"xx-large",}}/>
//        <div className={style['logo-txt']}>andeep</div>
//        </div>
//        <div className={style["nav-items"]}>
//        <ul>
//        <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#contact">Contact</a></li>
//          </ul>
//        </div>
//        </div>
//         </div>
        
//     )
// }


import { FaMediumM } from "react-icons/fa";
import style from "./Navbar.module.css";
import { useEffect } from "react";

export const Navbar = ({value}) => {
  
  useEffect(()=>{
    const root = document.documentElement;
    const texColors={
      black: "blue",
      pink: "blue",
      orange: "red",
      skyblue:"white",
      white:"red"
    }
    const themeMap = {
      black: "white",
      pink: "pink",
      orange: "orange",
      skyblue:"blue",
      white:"black"
    };

    root.style.setProperty("--apna-color", themeMap[value]);
    root.style.setProperty("--hover-color", texColors[value]);
  },[value])

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust to avoid cutting content
        behavior: "smooth", // Enables smooth scrolling
      });

      // Slow down scrolling using setTimeout (optional)
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500); // Adjust time for smoother effect
    }
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style["logo-container"]}>
          <FaMediumM style={{ fontSize: "xx-large" }} />
          <div className={style["logo-txt"]}>andeep</div>
        </div>
        <div className={style["nav-items"]}>
          <ul>
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>
        </div>
      </div>
      {/* <div className="theme">
        <div className={`circles dark`}></div>
        <div className={`circles white`}></div>
        <div className={`circles normal`}></div>
        <div className={`circles `}></div>
        <div className={`circles `}></div>
      </div> */}
    </div>
  );
};
