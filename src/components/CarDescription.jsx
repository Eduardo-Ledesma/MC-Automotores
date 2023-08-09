

const CarDescription = () => {
    return (
        <section className="container mx-auto flex px-4 gap-10">
            <div className="max-w-2xl shadow__total hover:cursor-pointer overflow-hidden">
                <img src="/img/Auto1.webp" alt="foto eco sport" className='hover:scale-110 transition-transform duration-500' />
            </div>
            
            <div className="">
                <ul>
                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                            <path fill="#FFF" d="M7 14h9V7l13 11l-13 11v-7H7z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Modelo 2013</p>
                    </li>

                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                            <path fill="#FFF" d="M7 14h9V7l13 11l-13 11v-7H7z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Version SE</p>
                    </li>

                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                            <path fill="#FFF" d="M7 14h9V7l13 11l-13 11v-7H7z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Motor 1.6 nafta</p>
                    </li>

                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                            <path fill="#FFF" d="M7 14h9V7l13 11l-13 11v-7H7z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Tracción delantera</p>
                    </li>

                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
                            <path fill="#FFF" d="M7 14h9V7l13 11l-13 11v-7H7z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>112.000km</p>
                    </li>
                    
                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f37f04" d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1L26.99 0z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Listo para transferir</p>
                    </li>
                    
                    <li className='flex items-center gap-4 mb-4'>
                        <svg width="28" height="28" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f37f04" d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1L26.99 0z"/>
                        </svg>
                        <p className='font-bold text-2xl text-gray-800'>Apto crédito prendario, entrega mínima del 80%.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CarDescription