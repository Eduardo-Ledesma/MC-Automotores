import CarGalery from '../components/CarGalery'
import useApp from '../hooks/useApp'
import 'animate.css';

const Gallery = () => {

    const { handleShowGallery } = useApp()

    return (
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black z-10 animate__animated animate__fadeIn flex overflow-hidden'>
                            
            <div className='w-full xl:w-4/5 mx-auto my-auto flex flex-col md:flex-row'>
                
                <CarGalery />
                <button type='button' className='place-self-center mt-4 md:place-self-start'
                    onClick={handleShowGallery}
                >
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ffffff">
                            <path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926l2.926-2.728Z"/>
                            <path fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z" clipRule="evenodd"/>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Gallery