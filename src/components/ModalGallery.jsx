import { Dialog } from '@headlessui/react'
import useApp from '../hooks/useApp'
import CarGallery from './CarGallery'
import 'animate.css'

function ModalGallery() {

    const { modalGallery, setModalGallery } = useApp()

    return (
            <Dialog open={modalGallery} as="div" className="fixed z-10 inset-0 overflow-y-auto animate__animated animate__fadeIn" onClose={() => setModalGallery(false)}>
                <div className="flex items-center justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
                
                    <Dialog.Overlay 
                        className="fixed inset-0 bg-gray-700 bg-opacity-80 transition-opacity"
                    />
                    

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    
                    <div className="inline-block w-full lg:w-[72%] h-auto bg-transparent rounded-lg shadow-xl transform transition-all sm:align-middle ">

                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4 xl:pr-10">
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-800 hover:text-gray-600 transition-colors"
                                onClick={() => setModalGallery(false)}
                            >
                            <span className="sr-only">Cerrar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div>
                            <div className="flex mx-auto justify-center w-full xl:w-[90%]">
                                <CarGallery />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </Dialog>
    )
}

export default ModalGallery