

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import gallery from '../data/gallery'

import { Row, Col } from 'react-bootstrap'
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper/core';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Controller])
export default () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const data = []
    const slides = [];

    for (let i = 0; i < gallery.length; i++) {
        data.push(
            gallery[i]
        )
    }

    const thumbs = [];

    for (let i = 0; i < gallery.length; i++) {
        slides.push(
            <SwiperSlide onClick={() => console.log(i)} style={{ listStyle: "none", textAlign: "center", marginLeft: "0px", height: "500px" }} key={`thumb-${i}`} tag="li">
                <img style={{ width: "100%" }} src={gallery[i].image} alt={`Thumbnail ${i}`} />
            </SwiperSlide>
        )
    }

    for (let i = 0; i < gallery.length; i++) {
        thumbs.push(
            <SwiperSlide onClick={() => console.log(i)} style={{ listStyle: "none", height: "100px", width: "100px", margin: "5px" }} key={`thumb-${i}`} tag="li">
                <img style={{ width: "130px", height: "100px", objectFit: "cover" }} src={gallery[i].image} alt={`Thumbnail ${i}`} />
            </SwiperSlide>
        )
    }






    return (
        <React.Fragment>
            <div className="gallery-container">

                <p style={{ fontFamily: "Optima", color: "#FFFFFF", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
                    Garden Gallery
            </p>

                <Swiper
                    id="main"
                    thumbs={{ swiper: thumbsSwiper }}

                    tag="section"
                    wrapperTag="ul"
                    spaceBetween={2}
                    slidesPerView={1}

                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    observer={true}
                    observeParents={true}

                >
                    {slides}
                </Swiper>


                <Swiper
                    className="hidden_on_small"
                    id="thumbs"
                    spaceBetween={0}
                    slidesPerView={5}
                    onSwiper={setThumbsSwiper}
                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    observer={true}
                    observeParents={true}
                    style={{ height: "200px" }}
                >
                    {thumbs}

                </Swiper>


            </div>
            <Row style={{ margin: "-50px 10vw 0 10vw" }}>
                <Col className="col-md-5 col-12" style={{ margin: "auto" }}
                >
                    <div style={{ marginTop: "60px" }} >

                    
                    <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "30px", fontWeight: "bold" }}>
                        Sagret Gardens
                    </p>
                    <p style={{ fontFamily: "Nunito", color: "#1c6a5c", fontSize: "14px", fontWeight: "bold", maxWidth: "300px" }}>
                        This is the most intimate garden with a capacity of up to 60 people. It is hired out at Ksh. 16,000 per day.
                    </p>
                    <p className="explore_button" style={{backgroundColor: "#2a4c46",padding: "8px 35px",fontSize:"14px"}}>Book Now</p>

                    </div>
                </Col>
                <Col className="hidden_on_small col-7">
                    <img style={{ width: "100%" }} src="gallery/image-3.jpeg" alt="flower image" />
                </Col>
            </Row>

        </React.Fragment>
    );
};