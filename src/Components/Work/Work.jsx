import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Work = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
        <span style={{color:darkMode?"White":""}}>Works For All These</span>
            <span>Brands & Clients </span>
            <span>
                As a data science engineer, I am responsible for the development and maintenance 
                <br/> of the technical infrastructure that supports data science projects.
                <br/> This involves designing and implementing data pipelines, developing algorithms for
                <br/> predictive analytics and machine learning, and ensuring data security and compliance.
                </span>
            
        <button className="button s-button">Hire Me</button>
     <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
</div> 

{/*Right Side*/}
    <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
    </div>
    </div>  
  )
}

export default Work