import useApp from '../hooks/useApp'

const CarPrevImages = () => {

    const { handleShowGallery } = useApp()

    return (
        <section className='mt-28'>
            <h3 className='font-bold text-3xl text-center mb-16'>Más Imágenes</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 border-y-2 border-gray-600'>
                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_2.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500' 
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_3.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_7.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_5.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_6.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>

                <div className='hover:cursor-pointer overflow-hidden max-h-80'
                    onClick={handleShowGallery}
                >
                    <img src="/img/eco/eco_4.jpg" alt="imagen ilustrativa ecosport" 
                        className='hover:scale-110 transition-transform duration-500'
                    />
                </div>
            </div>
        </section>
    )
}

export default CarPrevImages