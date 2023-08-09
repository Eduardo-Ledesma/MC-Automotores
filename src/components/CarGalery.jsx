// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/gallery.css'

const CarGalery = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
            enabled: true,
        }}
        pagination={{
            
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="polenta"
        >
        <SwiperSlide><div className='max-h-96'>
            <img loading='lazy' src="/img/eco/eco_2.jpg" alt="imagen ilustrativa ecosport" />
        </div></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/eco/eco_3.jpg" alt="imagen ilustrativa ecosport" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/eco/eco_7.jpg" alt="imagen ilustrativa ecosport" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/eco/eco_5.jpg" alt="imagen ilustrativa ecosport" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/eco/eco_6.jpg" alt="imagen ilustrativa ecosport" /></SwiperSlide>
        <SwiperSlide><img loading='lazy' src="/img/eco/eco_4.jpg" alt="imagen ilustrativa ecosport" /></SwiperSlide>
    </Swiper>
    )
}

export default CarGalery