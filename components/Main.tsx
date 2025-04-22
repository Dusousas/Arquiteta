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

// Funções de navegação modificadas
const handlePrev = (e: React.MouseEvent<HTMLDivElement>) => {
  // Previne a seleção de texto ao clicar
  e.preventDefault();
  if (swiperRef.current) {
    swiperRef.current.swiper.slidePrev();
  }
};

const handleNext = (e: React.MouseEvent<HTMLDivElement>) => {
  // Previne a seleção de texto ao clicar
  e.preventDefault();
  if (swiperRef.current) {
    swiperRef.current.swiper.slideNext();
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
            className="custom-prev border rounded-full hover:bg-white hover:border-none cursor-pointer select-none"
            onClick={handlePrev}
            onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => e.preventDefault()}
          >
            <MdOutlineKeyboardArrowLeft className="text-4xl text-white hover:text-black" />
          </div>
          <div
            className="custom-next border rounded-full hover:bg-white hover:border-none cursor-pointer select-none"
            onClick={handleNext}
            onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => e.preventDefault()}
          >
            <MdOutlineKeyboardArrowRight className="text-4xl text-white hover:text-black" />
          </div>
        </article>
      </div>
    </section>
  );
}
