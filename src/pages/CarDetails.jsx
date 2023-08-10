import { Link } from 'react-router-dom'
import CarDescription from '../components/CarDescription'
import CarPrevImages from '../components/CarPrevImages'
import Gallery from '../components/Gallery'
import useApp from '../hooks/useApp'
import '../styles/border.css'


const CarDetails = () => {
    
    const { showGallery } = useApp()

    return (
        <>
            <main className="bg-gradient-to-br from-slate-300 to-gray-100 overflow-y-hidden">
                { showGallery ? <Gallery />
                : (
                    <article className="pb-20">
                        <h2 className="text-center font-bold text-5xl text-gray-800 py-16">Ford Eco Sport</h2>
                        
                        <CarDescription />

                        <CarPrevImages />

                        <div className='flex mt-20'>
                            <Link to='/contact'
                                className='mx-2 sm:mx-auto border-2 px-4 py-2 w-full sm:w-2/3 md:w-1/3 text-center font-bold uppercase text-xl border-gray-800
                                    hover:bg-gray-800 hover:text-white transition-color duration-500 tracking-widest'
                            >
                                Contactanos
                            </Link>
                        </div>
                        
                    </article>
                )}
                
            </main>   
        </>
    )
}

export default CarDetails