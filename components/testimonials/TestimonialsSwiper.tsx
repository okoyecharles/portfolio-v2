import React, { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../db/testimonials";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const TestimonialsSwiper = () => {
  return (
    <div className="testimonials__swiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
