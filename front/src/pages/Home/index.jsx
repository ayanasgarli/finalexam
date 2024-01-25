import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./index.scss";
import { Navigation } from "swiper/modules";
import DynamicSection from "../../components/DynamicSection";
import { Helmet } from "react-helmet";
import Welcome from "../../components/Welcome";
import Testimonials from "../../components/Testimonials";
import Service from "../../components/Service";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
    <link
      rel="icon"
      href="https://cdn-icons-png.flaticon.com/512/25/25694.png"
    />
  </Helmet>
      <div className="main">
        <div className="img">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div className="text">
            <h1>
              Food and more<span>.</span>{" "}
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
      </div>
      <Welcome/>
      <Testimonials/>
      <Service/>
      <DynamicSection />
      <Footer/>
    </>
  );
}
