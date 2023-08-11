import { useEffect } from 'react'
import useApp from '../hooks/useApp'
import 'animate.css'

const CarPrevImages = () => {

    const { setModalGallery } = useApp()

    return (
        <section className='mt-28'>
            <h3 className='font-bold text-3xl text-center mb-16'>Más Imágenes</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 border-y-2 border-gray-600'>
                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_2.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500' 
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_3.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_7.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_5.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_6.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={() => setModalGallery(true)}
                >
                    <img src="/img/eco/eco_4.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>
            </div>
        </section>
    )
}

const LazyImages = () => {

    useEffect(() => {
        const change = (entries) => {
            
            const el = entries[0]
            console.log(el);
            if(el.isIntersecting) {
                const section = document.querySelector('#lazyImg')
                section.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower')
            }
        }

        const observer = new IntersectionObserver(change, {
            rootMargin: '20px'
        })

        observer.observe(document.querySelector('#lazyImg'))
    })

    return <div id='lazyImg'>
        <CarPrevImages />
    </div>
}

export default LazyImages
