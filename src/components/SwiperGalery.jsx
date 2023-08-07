// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/swiper.css'

const SwiperGalery = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true}
            navigation={true}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
        <SwiperSlide><img loading='lazy' src="/img/Auto1.webp" alt="foto auto1" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto2.webp" alt="foto auto2" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto3.webp" alt="foto auto3" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto4.webp" alt="foto auto4" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto5.webp" alt="foto auto5" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto6.webp" alt="foto auto6" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto7.webp" alt="foto auto7" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto8.webp" alt="foto auto8" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/Auto9.webp" alt="foto auto9" /></SwiperSlide>
    </Swiper>
    )
}

export default SwiperGalery