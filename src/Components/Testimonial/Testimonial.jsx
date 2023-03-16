import React from 'react'
import "./Testimonial.css"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";
import { Pagination } from 'swiper'
import "swiper/css/pagination"

import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'


const Testimonial=()=> {
    const clients=[{
        img:profilePic1,
        review:"Data science engineering is an exciting field that combines advanced programming skills with statistical analysis and data modeling. Data science engineers are responsible for designing and implementing data-driven solutions to solve complex business problems. They work with large datasets, develop machine learning algorithms, and create custom data visualizations to help stakeholders make informed decisions."
    }
    ,
    {
        img:profilePic2,
        review:"To become a data science engineer, one must have a strong foundation in computer science, statistics, and mathematics. Additionally, proficiency in programming languages such as Python, R, and SQL is essential. Data science engineers must be comfortable working with big data technologies such as Hadoop, Spark, and NoSQL databases. They should also have a good understanding of data processing pipelines and data warehousing concepts."
    },
    {
        img:profilePic3,
        review:"In addition to technical skills, data science engineers should possess excellent communication and collaboration skills. They must be able to work effectively with other members of the team, including data analysts, data scientists, and business stakeholders. They must also be able to explain complex technical concepts to non-technical stakeholders and make data-driven recommendations based on their analyses."
        
    },
    {
        img:profilePic4,
        review:"Data science engineering is a rapidly growing field, and the demand for skilled professionals is high. Organizations across industries are recognizing the importance of data-driven decision-making and are investing in data science teams to help them stay competitive. Data science engineers have exciting career opportunities in industries such as finance, healthcare, and e-commerce, and can expect to work on challenging projects that have a significant impact on business outcomes."
    },
    ]
    return (
    <div className="t-wrapper" id="testimonial">
        <div className="t-heading">
        <span>Clients always get</span>
            <span> Exceptional Work</span>
            <span> from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
            >
                {/* slider */}
                {clients.map((client,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    
    )
}

export default Testimonial