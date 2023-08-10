import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarDescription from '../components/CarDescription'
import CarPrevImages from '../components/CarPrevImages'
import ModalGallery from '../components/ModalGallery'
import useApp from '../hooks/useApp'
import '../styles/border.css'


const CarDetails = () => {
    
    const { modalGallery } = useApp()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main className="bg-gradient-to-br from-slate-800 to-green-900 overflow-y-hidden">
                <article className="pb-20">
                    <h2 className="text-center font-bold text-5xl py-16">Ford Eco Sport</h2>
                    { modalGallery && <ModalGallery /> }
                    <CarDescription />

                    <CarPrevImages />

                    <div className='flex mt-20'>
                        <Link to='/contact'
                            className='mx-2 sm:mx-auto border-2 px-4 py-2 w-full sm:w-2/3 md:w-1/3 text-center font-bold uppercase text-xl border-gray-200
                                hover:bg-gray-100 hover:text-gray-800 transition-color duration-500 tracking-widest'
                        >
                            Contactanos
                        </Link>
                    </div>
                    
                </article>
            </main>   
        </>
    )
}

export default CarDetails