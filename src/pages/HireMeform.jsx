import { useState } from "react"
import "./regestration.css";
import axios from "axios";


export const HireForm=()=>{
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        companyName:"",
        phoneNumber:"",
        message:""
    });
    const [error, setError] = useState(''); //  Ensure setError is defined
    const handleInputChange=({ target: { name, value } })=>{ 
   setUser((prev)=>({...prev,[name]:value}));
    }

    const handleFormSubmit=async(e)=>{
        e.preventDefault();
        console.log(user);
        try {
            const res = await axios.post('https://portfolioback-wtwu.onrender.com/post/hire', user, {
                headers:{ "Content-Type": "application/json"}
            });
            console.log(res);
            setUser({ firstName:"",
                lastName:"",
                email:"",
                companyName:"",
                phoneNumber:"",
                message:""});
            alert('Submitted Hire me form!');
            // setLocalStorageSocialData(res.data.token); // Store token (optional)
        } catch (err) {
            setError('Invalid username or password');
        }

        
    }
    return(
        <div className="wrapper">
        <div className="form-container">

        <p className="heading">Hiring Form</p>
        <p className="why">Please fill this form if you want to Hire Me</p>
        <form onSubmit={handleFormSubmit}>
        <div className="inputs">
        <label htmlFor="firstName">
            <p  className="abinput">First name</p>
            <input type="text"
        name="firstName"
        placeholder="Enter firstName"
        required
        value={user.firstName}
        onChange={handleInputChange}
        />
        </label>
       

        <label htmlFor="lastName">
            <p className="abinput">Last Name</p>
            <input type="text"
        name="lastName"
        placeholder="Enter lastName"
        required
        value={user.lastName}
        onChange={handleInputChange}
        />
        </label>
        

        <label htmlFor="email">
            <p className="abinput">Email</p>
            <input type="text" 
        name="email"
        placeholder="Enter your email"
        required
        value={user.email}
        onChange={handleInputChange}
        />

        </label>

        <label htmlFor="company name">
            <p className="abinput">Company Name</p>
            <input type="text" 
        name="companyName"
        placeholder="Enter Your Company Name"
        required
        value={user.companyName}
        onChange={handleInputChange}
        />
        </label>
       

        <label htmlFor="phoneNumber">
            <p className="abinput">PhoneNumber</p>
            <input type="phone"
        name="phoneNumber"
        placeholder="098765432"
        required
        value={user.phoneNumber}
        onChange={handleInputChange}
        />
        </label>


        <label htmlFor="message">
            <p  className="abinput">Massage</p>
            <input type="text"
        name="message"
        placeholder="Enter some Massage"
        required
        value={user.message}
        onChange={handleInputChange}
        />
        </label>
       </div>

        <p>By creating an account you agree to our 
            <a href="#"></a>
            <span style={{color:"skyblue"}}>Terms</span> & <span style={{color:"skyblue"}}>Privacy</span>
        </p>

        <div>
            <button className="sumitBt" type="submit">
                Hire
            </button>
        </div>

        </form>
             
             <section>
             <p>
  {user.firstName && `Hi ${user.firstName}`}
  {user.lastName && ` ${user.lastName}`}
  {user.email && `, your email is ${user.email}`}
  {user.phoneNumber && ` and phone number is ${user.phoneNumber}`}
</p>

             </section>

        </div>
        </div>
    );
}