import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/Dietician.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { Center } from '@chakra-ui/react';




function Dietician() {
  return (
      <div className='background'>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
        <div className='cube'></div>
      <h1 className="heading text-white"><b>Dieticians</b></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true} 
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false, 
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className="slide-content">
            <div className="slide-content1"></div>
            <h2>Ms. Nafeesa Imteyaz</h2>
            <p className="subtitle">Therapist, Dietitian/Nutritionist</p>
            <div className="education">MSc. - Dietetics & Food Service Management</div>
            <div className="experience">29 Years Experience Overall (27 years as specialist)</div>
            <div className="contact">
              <ion-icon name="call-outline"></ion-icon>
              <span>08037298766</span>
            </div>
            <div className="location">
              <span>Regus Business Centre, Pine Valley Building, 1st Floor, Landmark: Near Embassy Golf-links Business Park, Bangalore</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-content2"></div>
            <h2>Ms. Vani Krishna</h2>
            <div className="education">MSc - Clinical Nutrition and Dietetics</div>
            <p className="subtitle">Therapist, Dietitian/Nutritionist, Sports Nutritionist</p>
            <div className="experience">12 Years Experience Overall</div>
            <div className="location">
              <ion-icon name="location-outline"></ion-icon>
              <span>Survey No. 10P & 12P, Whitefield Main Rd, Varthur Kodi, Ramagondanahalli, Landmark: Opposite Forum Value Mall and Next to Virginia Mall, Bangalore</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="slide-content3"></div>
            <h2>Ms. Rohini Raghu</h2>
            <p className="subtitle">Therapist, Dietitian/Nutritionist</p>
            <div className="education">MSc - Dietetics / Nutrition</div>
            <div className="experience">19 Years Experience Overall (15 years as specialist)</div>
            <div className="experience-details">
              <p>2004 - 2015 Nutrition and Dietitian at Ranghadhore Hospitals</p>
              <p>2004 - 2015 Nutrition and Dietitian at Shri Krishna Shevashrama</p>
            </div>
            <div className="location">
              <ion-icon name="location-outline"></ion-icon>
              <span>Number 99, Bull Temple Road, Gaviopuram Extension, Landmark: Next to Ramakrishna Ashram, Bangalore</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
          <div className="slide-content4"></div>
    <h2>Ms. Dhanalakshmi</h2>
    <p className="subtitle">Therapist, Dietitian/Nutritionist</p>
    <div className="education">M.Sc. - Food and Nutrition</div>
    <div className="experience">19 Years Experience Overall (17 years as specialist)</div>
    <div className="rating">94% <span>(18 patients)</span></div>
    <div className="details">
      MSc., MPhil Foods and Nutrition with 10+ years of experience in weight management, life style management and clinical nutrition
    </div>
    <div className="location">
      <ion-icon name="location-outline"></ion-icon>
      <span>C 002, Aishwarya Amaze Apartment, Devarachikkanahalli Main Road, Bangalore</span>
  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-content">
          <div className="slide-content5"></div>
    <h2>Ms. Anwesa Hajra</h2>
    <p className="subtitle">Therapist, Dietitian/Nutritionist</p>
    <div className="education">
      BSc - Dietitics / Nutrition, MSc - Applied Nutrition
    </div>
    <div className="experience">
      11 Years Experience Overall (10 years as specialist)
    </div>
    <div className="details">
      Ms. Anwesa Hajra is a Dietitian/Nutritionist in Whitefield.
    </div>
    <div className="location">
      <ion-icon name="location-outline"></ion-icon>
      <span>Plot Number 184/1 - 185, 1st Floor, MNC Plaza, Varthur Main Road, Bangalore</span>
    </div>
  </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    

  )
}

export default Dietician
