import "./About.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export const About=()=>{
    return(
    <footer>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-faded-text">
                    Mandeep
                </div>
                <div className="link-wrapper">
                    <div><a href="#project"> Project</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#contactme">ContactMe</a></div>
                </div>
                <div className="icon-wrapper">
                   <a href="https://www.linkedin.com/in/mandeep-tiwari-785b572b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i ><FaLinkedin /></i></a>
                   <a href="https://github.com/King-Mandeep"><i ><SiGithub /></i></a>   
                   <a href="#"> <i ><FaSquareXTwitter /></i></a>  
                   <a href="#"> <i ><FaInstagram /></i></a>  
                   <a href="#"><i><SiGmail /></i></a>   
                </div>
            </div>
        </div>
    </footer>
);}