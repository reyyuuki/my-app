import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide><div>Slide 1</div></SwiperSlide>
      <SwiperSlide><div>Slide 2</div></SwiperSlide>
      <SwiperSlide><div>Slide 3</div></SwiperSlide>
    </Swiper>
  );
};
export default Slider;
