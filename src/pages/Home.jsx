import { useState, useEffect, useContext } from "react";
import style from "./Home.module.css";
import { MyButtu } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";

export const Home = () => {
  const {theme,setTheme}=useContext(ThemeContext);
  const navigate = useNavigate();
  const buttonColors={
    black: "white",
    pink: "pink",
    orange: "orange",
    skyblue:"blue"
  }
  const texColors={
    black: "blue",
    pink: "blue",
    orange: "red",
    skyblue:"white"
  }
  const [butColor,changeButColor]=useState("red");
  const [texColor,changeTaxColor]=useState("white");
  // useEffect(() => {
  //   console.log("Theme changed to:", value);
  //   const root = document.documentElement;

  //   const themeMap = {
  //     black: "linear-gradient(to right, #434343, #000000)",
  //     pink: "linear-gradient(to right, #19547b, #ffd89b)",
  //     orange: "url('/coolbc1.png')",
  //     skyblue:"linear-gradient(to right, #CFDEF3, #E0EAFC)",
  //     white:"rgb(231,231,231)"
  //   };

  //   root.style.setProperty("--body-bg", themeMap[value]);
  //   changeButColor(buttonColors[value]);
  //   changeTaxColor(texColors[value]);
  // }, [value]);
 
  const roles = ["Learner", "MERN Stack Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentRole.substring(0, prev.length + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roles, roleIndex]);

  return (
    <div className={style["hero-section"]}>
      <div className={`${style.themeChanger}`}>
        <div className={style.allTypes}>
          <div style={{borderRadius:"38% 62% 0% 100% / 69% 92% 8% 31% ",backgroundColor:`${theme==="dark"?"white":"black"}` }} className={`${style.innerGola}`} onClick={ ()=>setTheme(theme==="dark" ? "light":"dark")} ></div>
          <div style={{borderRadius:"83% 17% 70% 30% / 100% 78% 22% 0%  ",backgroundColor:"pink"}} className={`${style.innerGola}`} onClick={ ()=>setTheme("pink")} ></div>
          <div style={{borderRadius:"100% 0% 66% 34% / 16% 9% 91% 84%  ",backgroundColor:"orange"}} className={`${style.innerGola}`} onClick={ ()=>setTheme("orange")} ></div>
          <div style={{borderRadius:"32% 68% 28% 72% / 0% 21% 79% 100%  ",backgroundColor:"skyblue"}} className={`${style.innerGola}`} onClick={()=>setTheme("dark")} ></div>
        </div>
      </div>
      <div className={`${style.absolute} ${style["faded-text"]}`}>Mandeep</div>
      <div className={style["hero-section-left"]}>
        <div className={style["hero-heading"]}>Hi!! Mandeep</div>
        <div className={style["hero-sub-heading"]}>
          I am a <span className={style.role}>{text}</span>
          <span className={style.cursor}>|</span>
        </div>
        <div className={style["hero-description"]}>
          I'm a software developer, and here is my portfolio website. Here you'll learn about my journey as a software developer.
        </div>
        <MyButtu onClick={() => navigate("/hireme")} $bgColor={butColor} $textColor={texColor}>Hire me</MyButtu>
      </div>
      <div className={style["hero-section-right"]}>
        <div className={`${style.absolute} ${style.userimg}`}>
          <img id="chotu" src="mantu2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
