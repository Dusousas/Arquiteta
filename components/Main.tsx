import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Slider1 from './subc/Slider1';
import Slider2 from './subc/Slider2';
import Slider3 from './subc/Slider3';

export default function Main() {
  // Referência para o Swiper
  const swiperRef = useRef<any>(null);

  // Funções para navegação
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Navegar para o slide anterior
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Navegar para o próximo slide
    }
  };

  return (
    <section className="">
      <div>
        <Swiper
          ref={swiperRef} // Referência adicionada ao Swiper
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[EffectFade, Navigation]}
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider3 />
          </SwiperSlide>
        </Swiper>

        {/* Setas de navegação conectadas ao Swiper */}
        <article className="flex items-center justify-end gap-2 relative bottom-[100px] z-10 maxW">
          <div
            className="custom-prev border rounded-full hover:bg-white hover:border-none cursor-pointer"
            onClick={handlePrev} // Ao clicar, navega para o slide anterior
          >
            <MdOutlineKeyboardArrowLeft className="text-4xl text-white hover:text-black" />
          </div>
          <div
            className="custom-next border rounded-full hover:bg-white hover:border-none cursor-pointer"
            onClick={handleNext} // Ao clicar, navega para o próximo slide
          >
            <MdOutlineKeyboardArrowRight className="text-4xl text-white hover:text-black" />
          </div>
        </article>
      </div>
    </section>
  );
}
