import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import './styles.css';
import paragraphs from './data';

const Img01 = require('./images/Saab2.jpg');
const Img02 = require('./images/DC3v2.jpg');
const Img03 = require('./images/c23v2.jpg');
const Img04 = require('./images/Duchess.jpg');
const ImgPara01 = require('./images/saab1.png');

const images = [Img01, Img02, Img03, Img04];

interface SwiperProps {
}

export default function Home() {


  return (
    <>
    <Swiper
      effect = {'coverflow'}
      grabCursor = {true}
      centeredSlides = {false}
      modules = {[Navigation, Pagination, EffectCoverflow, Autoplay]}
      loop = {true}
      speed = {1000}
      spaceBetween = {0}
        autoplay = {{
          delay: 5000,
          disableOnInteraction: false,
        }}
  slidesPerView = {1}
      coverflowEffect = {{
        rotate: 0,
          stretch: 0,
        depth: 1000,
        modifier: 2,
        slideShadows: true,
      }}
      navigation = {true}
      pagination = {{dynamicBullets: true}}
      className = "mySwiper"
      onSlideChange = {(swiper) => console.log(swiper.activeIndex)}
    >
      <SwiperSlide>
        <img src={images[0]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[2]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[3]} alt="" />
    </SwiperSlide>
 
    </Swiper>
       
    <div className="main_page">
        <div>
      <h1>{paragraphs[0]}</h1>
        <p>{paragraphs[1]}</p>
          <p>{paragraphs[2]}</p>
        </div>
        <div>
          <img src={ImgPara01} alt="" className='para-image' />
        </div>
    </div>
      
  </>
  );

}
