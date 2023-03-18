import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
<div className="portfolio" id='Portfolio'>
    {/* heading */}
    <span style={{color:darkMode?"yellow":""}}>Recent Project</span>
    <span style={{color:darkMode?"white":""}}>Portfolio</span>

    {/* swiper */}
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
        <SwiperSlide>
            <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MusicApp} alt="" />
        </SwiperSlide>
    </Swiper>
    


</div>  )
}

export default Portfolio