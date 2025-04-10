import "./Skills.css";
import { Link } from 'react-router-dom';


import { useEffect, useState } from "react";
import { MyButtu } from "../components/Button";
export const Skills=({value})=>{
  const [butColor,changeButColor]=useState("red");
  const [texColor,changeTaxColor]=useState("white");
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
  useEffect(()=>{
    changeButColor(buttonColors[value]);
    changeTaxColor(texColors[value]);
  },[value])
  const [table,setTable]=useState("");
  const handleButton=(which)=>{
    if(table==which){
      setTable("none");
    }
    else{
      setTable(which);
    }
  }

 
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


    return(
    <div className="skillContainer">
     <div className="buttons">
     <MyButtu onClick={()=>handleButton("tech")} $bgColor={butColor} $textColor={texColor}>Tech Skills</MyButtu>
     <MyButtu onClick={()=>handleButton("soft")} $bgColor={butColor} $textColor={texColor}>Soft Skills</MyButtu>
     </div>
     <div className="skills">
     {table === "tech" && (
      <div className="skcontain">
      <div className="sktable">
<div className="ofgrid">
<button onClick={() => scrollToSection("JavaScript")} className="popupText">Go to Projects</button>

<div className="absolute2">
          Skills
   </div>
       <ul>
        <li><h3>FRONTEND:</h3></li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>Framework: REACT</li>
        </ul></div>

        <div className="ofgrid">
        <button onClick={() => scrollToSection("Node")} className="popupText">Go to Projects</button>
       
         <ul>
        <li><h3>BACKEND:</h3></li>
        <li>NODE.js</li>
        <li>express.js</li>
        <li>{`Core Concepts: becryting, authentication(JWT)`}</li>
        </ul></div>

        <div className="ofgrid">
        <button onClick={() => scrollToSection("Combine")} className="popupText">Go to Projects</button>
       
          <ul>
        <li><h3>DATABASE:</h3></li>
        <li>MONGODB</li>
        <li>SQL</li>
        <li>MONGOOSE</li></ul></div>
  
        <div className="ofgrid">
        <button onClick={() => scrollToSection("DSA")} className="popupText">Go to Projects</button>
        
           <ul>
        <li><h3>Language & DSA</h3></li>
        <li>C,C++,Python</li>
        <li>Data structure & Algorithm </li>
        <li>150+ questions on leetcode & GFG</li> </ul></div>

      </div>
      

      <div className="secondhalf">
  <div className="myimg">
            <img src="mantu1.jpg" alt="" />
        </div>
      </div>
        <div className="absolute">
          Skills
   </div>

  
   <div className="absolute3">
          Skills
   </div>
     </div>
     )}
       {table === "soft" && (
        
        <div className="skcontain">
           <div className="absolute">
          Skills
   </div>
      <div className="sktable">
     <div className="ofgrid">
     <div className="absolute2">
          Skills
   </div>
      <ul>
       <li><h3>Communication Skills</h3></li>
       <li>Explaining technical concepts to non-technical people</li>
       <li>Writing clear documentation and reports</li>
       <li>Active listening and effective questioning</li>


      </ul>
     </div>
     <div className="ofgrid"><ul>
      <li><h3>Problem-Solving & Critical Thinking</h3></li>
      <li>Analyzing complex issues logically</li>
      <li>Debugging and troubleshooting efficiently</li>
      <li>Thinking creatively to find alternative solutions</li>
      
      </ul></div>
     <div className="ofgrid"><ul>
      <li><h3>Teamwork & Collaboration</h3></li>
      <li>Working with cross-functional teams (developers, designers, business teams)</li>
      <li>Contributing to open-source or team projects</li>
      
      </ul></div>
     <div className="ofgrid"><ul>
      <li><h3>Adaptability & Learning Ability</h3></li>
      <li>Keeping up with new technologies and trends</li>
      <li>Quickly learning new frameworks, tools, and languages</li>
      
      </ul></div>


     
      </div>
      <div className="secondhalf"> <div className="myimg">
            <img src="mantu1.jpg" alt="" />
        </div></div>
        <div className="absolute3">
          Skills
   </div>
      </div>)}

     </div>
    

    </div>

    );
}