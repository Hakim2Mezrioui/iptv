import classes from "./bestMovies.module.css";

import { useState } from "react";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import avatar from "../shared/movies/avatar.jpg";
import batman from "../shared/movies/batman.jpg";
import blackList from "../shared/movies/blackList.jpg";
import casaDePapel from "../shared/movies/casaDePapel.jpg";
import ironMan from "../shared/movies/ironMan.jpg";
import jocker from "../shared/movies/jocker.jpg";
import myName from "../shared/movies/myName.jpg";
import peakyBlinders from "../shared/movies/peakyBlinders.jpg";
import reacher from "../shared/movies/reacher.jpg";

const BestMovies = () => {

    const images = [avatar, batman, blackList, casaDePapel, ironMan, jocker, myName, peakyBlinders, reacher];

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true
    //   };

    const settings = {
        className: "center",
        infinite:true, //to allow the slides to show infinitely
        lazyLoad: true,
        speed: 300, //this is the speed of slider in ms
        slidesToShow: 5, //number of slides to show up on screen
        centerMode: true, 
        centerPadding: "100px",
        className: "center",
        autoplay: true,
      };

    const [imgIndex,setImgIndex] = useState(0);

    // const NextArrow = ({onClick}) => {
    //     return (
    //       <div className="arrow next" onClick={onClick}>
    //         <FaArrowRight />
    //       </div>
    //     )
    //   }
    
    // const PrevArrow = ({onClick}) => {
    //     return (
    //         <div className="arrow prev" onClick={onClick}>
    //         <FaArrowLeft />
    //         </div>
    //     )
    // }

    return (
        <div className={classes.movies}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx}>   
                        <div className={idx === imgIndex ? "slide activeSlide" : "slide"}></div>
                        <img width="300" height={600} src={img} alt={idx} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BestMovies;