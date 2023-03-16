import React from "react";  
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Services=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="services">
            {/*left side*/}
            <div className="awesome">
                <span style={{color:darkMode?"white":""}}>My Awesome</span>
                <span>Services</span>
                <span>
                As a data science engineer, I am responsible for the development and maintenance 
                <br/> of the technical infrastructure that supports data science projects.
                <br/> This involves designing and implementing data pipelines, developing algorithms for
                <br/> predictive analytics and machine learning, and ensuring data security and compliance.
                </span>
                {/* <a href="">{resume} download</a> */}
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/*right side*/}
            <div className="cards">
               <div style={{left:'21rem',left:"13rem"}} >
                <Card
                emoji={HeartEmoji}
                heading={'Web Developer'}
                detail={"Fronr-End , Back-End , React.js , Node.js "} />
               </div>

               <div style={{top:'14rem',left:"-2rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Data Science Enginner"}
                    detail={"We shape the world"}/>
               </div>

              <div style={{top:"18rem",left:"15rem"}}>
              <Card
               emoji={Glasses}
               heading={"Game developer"}
               detail={"real engine , C# , Unity"}/>
              </div>
              <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services