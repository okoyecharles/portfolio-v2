import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../db/testimonials";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { a, useSpring } from "@react-spring/web";

const TestimonialsSwiper = () => {
  const swiperContainerRef = useRef(null);
  const swiperRef = useRef<SwiperRef>(null);

  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
      scale: 0.98
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }))

  useIntersectionObserver(swiperContainerRef, () => {
    api.start({
      opacity: 1,
      scale: 1
    });
    console.log('api started')
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    };
  });


  return (
    <a.div className="testimonials__swiper" ref={swiperContainerRef} style={spring}>
      <Swiper
        ref={swiperRef}
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
          delay: 3000,
          disableOnInteraction: false
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.author}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </a.div>
  );
};

export default TestimonialsSwiper;
