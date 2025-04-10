import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
export const Projects=({value})=>{
    const [show,setShow]=useState(null);


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

    const texColors={
      black: "white",
      pink: "blue",
      orange: "red",
      skyblue:"blue",
      white:"black"
    }

    useEffect(()=>{
      root.style.setProperty("--text-col", texColors[value]);
    },[value])

    return(
   
   <div className={styles.wrapper}>
    <div className={styles.heading}>
    <h1>Here is all about my work and Projects</h1>
    </div>
 
  <div className={styles.navbar}>
    <div className={styles.navItems}>
        <ul>
            <li onClick={() => scrollToSection("JavaScript")} className={styles.pul}>JavaScript</li>
            <li onClick={() => scrollToSection("React")} className={styles.pul}>React.js</li>
            <li onClick={() => scrollToSection("Node")} className={styles.pul}>Node.js</li>
            <li onClick={() => scrollToSection("Combine")} className={styles.pul}>Combine</li>
            <li onClick={() => scrollToSection("DSA")} className={styles.pul}>DSA</li>
        </ul>
    </div>
  </div>



  

   <div id="JavaScript" className={styles.container}>
    <h2>JavaScript</h2>
    <div className={styles.about}>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iste, labore eos repellat dolorem atque odit magnam, ex pariatur, sit magni esse molestiae totam placeat vitae asperiores nobis veritatis voluptas eum. Sit!</p>
    </div>
   
    <div className={styles.divider}>
        <div className={styles.imgSection}>
        <img className={styles.projectImg} src="passwordgen.png" alt="" />
        <img className={styles.projectImg} src="TTT.png" alt="" />
        </div>
        {show=="JavaScript"&&( 
        <div className={styles.explain}>
       
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, inventore nulla quaerat amet consequuntur error eius deleniti sint dolorum numquam consequatur nihil natus voluptate. Mollitia, impedit. Officiis odit numquam vero, nesciunt itaque hic pariatur magnam, ea facilis architecto id nemo, similique mollitia. Veniam officiis assumenda ipsam deserunt odio fuga velit expedita tempora ex voluptatem aliquam saepe nihil ratione molestias facere dicta, laboriosam iste, consequatur quos inventore sequi. Ut corrupti aspernatur quisquam quam placeat ex dolorum aut officia quod sed. Laboriosam voluptatum impedit quos tempora odio itaque animi nihil ipsa, molestiae quia culpa aspernatur reprehenderit quidem non nostrum iusto hic fugit.</p> 
       
        </div>)}
    </div>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><button onClick={()=>setShow((show=="JavaScript")?null:"JavaScript")} className={styles.aboutBt} id="JavaScript">About these Projects</button></div>
       
   <div id="Node" className={styles.container}>
    <h2>{`Node.Js (backend Projects)`}</h2>
    <div className={styles.about}>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iste, labore eos repellat dolorem atque odit magnam, ex pariatur, sit magni esse molestiae totam placeat vitae asperiores nobis veritatis voluptas eum. Sit!</p>
    </div>
   
    
    <div className={styles.divider}>
        <div className={styles.imgSection}>
        <img className={styles.projectImg} src="votingApp.png" alt="" />
        <img className={styles.projectImg} src="postman.png" alt="" />
        <img className={styles.projectImg} src="edtech.png" alt="" />
        
        </div>
        {show=="Node.js"&&(      <div className={styles.explain}>
       
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, inventore nulla quaerat amet consequuntur error eius deleniti sint dolorum numquam consequatur nihil natus voluptate. Mollitia, impedit. Officiis odit numquam vero, nesciunt itaque hic pariatur magnam, ea facilis architecto id nemo, similique mollitia. Veniam officiis assumenda ipsam deserunt odio fuga velit expedita tempora ex voluptatem aliquam saepe nihil ratione molestias facere dicta, laboriosam iste, consequatur quos inventore sequi. Ut corrupti aspernatur quisquam quam placeat ex dolorum aut officia quod sed. Laboriosam voluptatum impedit quos tempora odio itaque animi nihil ipsa, molestiae quia culpa aspernatur reprehenderit quidem non nostrum iusto hic fugit.</p>
       </div>   )}
       
    </div>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"3rem"}}><button onClick={()=>setShow((show=="Node.js")?null:"Node.js")} className={styles.aboutBt}id="Node">About these Projects</button></div>




   <div id="React" className={styles.container}>
    <h2>{`React.js (Frontend Projects)`}</h2>
    <div className={styles.about}>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iste, labore eos repellat dolorem atque odit magnam, ex pariatur, sit magni esse molestiae totam placeat vitae asperiores nobis veritatis voluptas eum. Sit!</p>
    </div>
   
    
    <div className={styles.divider}>
        <div className={styles.imgSection}>
        <img className={styles.projectImg} src="portfolio.png" alt="" />
        <img className={styles.projectImg} src="todo.png" alt="" />
        </div>
        {show=="React"&&(      <div className={styles.explain}>
       
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, inventore nulla quaerat amet consequuntur error eius deleniti sint dolorum numquam consequatur nihil natus voluptate. Mollitia, impedit. Officiis odit numquam vero, nesciunt itaque hic pariatur magnam, ea facilis architecto id nemo, similique mollitia. Veniam officiis assumenda ipsam deserunt odio fuga velit expedita tempora ex voluptatem aliquam saepe nihil ratione molestias facere dicta, laboriosam iste, consequatur quos inventore sequi. Ut corrupti aspernatur quisquam quam placeat ex dolorum aut officia quod sed. Laboriosam voluptatum impedit quos tempora odio itaque animi nihil ipsa, molestiae quia culpa aspernatur reprehenderit quidem non nostrum iusto hic fugit.</p>
       </div>   )}
       
    </div>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"3rem"}}><button onClick={()=>setShow((show=="React")?null:"React")} className={styles.aboutBt} id="React">About these Projects</button></div>




   <div id="DSA" className={styles.container}>
    <h2>{`DSA (Data Structure & Algorithms & Logical Work)`}</h2>
    <div className={styles.about}>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iste, labore eos repellat dolorem atque odit magnam, ex pariatur, sit magni esse molestiae totam placeat vitae asperiores nobis veritatis voluptas eum. Sit!</p>
    </div>
   
    
    <div className={styles.divider}>
        <div className={styles.imgSection}>
        <img className={styles.projectImg} src="totalques.png" alt="" />
        <img className={styles.projectImg} src="leetcode.png" alt="" />
        </div>
        {show=="DSA"&&(      <div className={styles.explain}>
       
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, inventore nulla quaerat amet consequuntur error eius deleniti sint dolorum numquam consequatur nihil natus voluptate. Mollitia, impedit. Officiis odit numquam vero, nesciunt itaque hic pariatur magnam, ea facilis architecto id nemo, similique mollitia. Veniam officiis assumenda ipsam deserunt odio fuga velit expedita tempora ex voluptatem aliquam saepe nihil ratione molestias facere dicta, laboriosam iste, consequatur quos inventore sequi. Ut corrupti aspernatur quisquam quam placeat ex dolorum aut officia quod sed. Laboriosam voluptatum impedit quos tempora odio itaque animi nihil ipsa, molestiae quia culpa aspernatur reprehenderit quidem non nostrum iusto hic fugit.</p>
       </div>   )}
       
    </div>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"3rem"}}><button onClick={()=>setShow((show=="DSA")?null:"DSA")} className={styles.aboutBt} id="DSA">About these Projects</button></div>



   <div id="Combine" className={styles.container}>
    <h2>{`Combine Projects (Fullstack Projects & Group Projects)`}</h2>
    <div className={styles.about}>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iste, labore eos repellat dolorem atque odit magnam, ex pariatur, sit magni esse molestiae totam placeat vitae asperiores nobis veritatis voluptas eum. Sit!</p>
    </div>
   
    
    <div className={styles.divider}>
        <div className={styles.imgSection}>
        <img className={styles.projectImg} src="forms.png" alt="" />
        <img className={styles.projectImg} src="database.png" alt="" />
        </div>
        {show=="Combine"&&(      <div className={styles.explain}>
       
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, inventore nulla quaerat amet consequuntur error eius deleniti sint dolorum numquam consequatur nihil natus voluptate. Mollitia, impedit. Officiis odit numquam vero, nesciunt itaque hic pariatur magnam, ea facilis architecto id nemo, similique mollitia. Veniam officiis assumenda ipsam deserunt odio fuga velit expedita tempora ex voluptatem aliquam saepe nihil ratione molestias facere dicta, laboriosam iste, consequatur quos inventore sequi. Ut corrupti aspernatur quisquam quam placeat ex dolorum aut officia quod sed. Laboriosam voluptatum impedit quos tempora odio itaque animi nihil ipsa, molestiae quia culpa aspernatur reprehenderit quidem non nostrum iusto hic fugit.</p>
       </div>   )}
       
    </div>
   </div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"3rem"}}><button onClick={()=>setShow((show=="Combine")?null:"Combine")} className={styles.aboutBt} id="Combine">About these Projects</button></div>

  </div>

   
   
   
    )
}