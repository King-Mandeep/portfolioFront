import "./Contact.css";
import {MyButtu} from "../components/Button"
import { LuSend } from "react-icons/lu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export const Contact = ({value}) => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
});
const [error, setError] = useState('');
const handleInputChange=({ target: { name, value } })=>{ 
  setUser((prev)=>({...prev,[name]:value}));
   }

   const handleFormSubmit=async(e)=>{
    e.preventDefault();
        console.log(user);
        try {
            const res = await axios.post('https://portfolioback-wtwu.onrender.com/post/contactMe', user, {
                headers:{ "Content-Type": "application/json"}
            });
            console.log(res);
            alert('Submitted Contact me form!');
            setUser({name:"",
              email:"",
              subject:"",
              message:""})
            // setLocalStorageSocialData(res.data.token); // Store token (optional)
        } catch (err) {
            setError('Invalid username or password');
        }
   }



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

    return (
      <div className="contactus-form-container">
        <div className="container">
          <h1 className="contactus-heading">Contact me</h1>
          <h3 className="contactus-sub-heading">
            Questions, thoughts, or just want to say hello?
          </h3>
  
          <div className="contactus-form-container">
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="formfield-container">
                <input
                  type="text"
                  className="formfield"
                  name="name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={handleInputChange}
                />
  
                <input
                  type="email"
                  name="email"
                  className="formfield"
                  placeholder="Enter your email address"
                  value={user.email}
                  onChange={handleInputChange}
                />
  
                <input
                  type="text"
                  className="formfield"
                  name="subject"
                  placeholder="Enter your subject"
                  value={user.subject}
                  onChange={handleInputChange}
                />
  
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="formfield formfield-textarea"
                  placeholder="Enter your message"
                  value={user.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
             <MyButtu $bgColor={butColor} $textColor={texColor}>Send Message
             <LuSend />
             </MyButtu>
            </form>
          </div>
        </div>
      </div>
    );
  };
  