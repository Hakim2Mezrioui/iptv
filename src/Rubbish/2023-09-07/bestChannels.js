import { Fragment, useEffect, useState } from "react";
import classes from "./bestChannels.module.css";
import Heading from "../helpers/heading/Heading";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bbc from "../shared/bestChannels/bbc.png";
import beinSport from "../shared/bestChannels/bienSport.png";
import hbo from "../shared/bestChannels/hbo.png";
import nba from "../shared/bestChannels/nba.png";
import netflex from "../shared/bestChannels/Netflix-logo.png";
import ufc from "../shared/bestChannels/ufc.png";
import skySport from "../shared/bestChannels/skySport.png";

const BestChannels = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Fragment>
            <section className={`${classes.slider} `}>
                <div className="container">
                    <Heading title="The Best International Channels" />
                </div>
                    <Slider {...settings}>
                        <div>
                            <img src={bbc} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={beinSport} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={hbo} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={nba} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={netflex} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={ufc} height="110" width="300"/>
                        </div>
                        <div>
                            <img src={skySport} height="110" width="300"/>
                        </div>
                    </Slider>
            </section>
        </Fragment>
    )
};

export default BestChannels;