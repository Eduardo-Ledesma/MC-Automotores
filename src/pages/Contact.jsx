import FormContact from "../components/FormContact"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <main className="bg-gradient-to-br from-slate-300 to-gray-100 pt-14">
            <h1 className="font-bold text-3xl sm:text-5xl text-gray-800 text-center mb-20">Contactanos</h1>

            <section className="container mx-auto pb-10">
                <p className="text-xl px-2 text-center font-bold text-gray-800">A continuación escribí tus datos en el formulario y hacenos llegar tu mensaje,</p>
                <p className="text-xl px-2 text-center font-bold text-gray-800">o sino también podes contactarnos mediante nuestras redes o whatsapp</p>
                
                <div className="mt-10 px-4 sm:px-10 py-10 bg-white rounded-md w-full lg:w-4/5 mx-auto shadow__total
                    grid lg:grid-cols-2 gap-10"
                >
                    <FormContact />

                    <ul className="mt-10">
                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                            <p className="font-bold text-gray-800 w-1/5">M&C</p>
                            <div className="flex w-full  sm:justify-start sm:w-4/5">
                                <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                    className="min-w-fit h-10 sm:w-10"
                                />
                                <p className="text-lg">+54 2923-667788</p>
                            </div>
                        </li>

                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                            <p className="font-bold text-gray-800 w-1/5">Joaquín</p>
                            <div className="flex w-full  sm:justify-start sm:w-4/5">
                                <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                    className="min-w-fit h-10 sm:w-10"
                                />
                                <p className="text-lg">+54 2923-332244</p>
                            </div>
                        </li>

                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                            <p className="font-bold text-gray-800 w-1/5">Francisco</p>
                            <div className="flex w-full  sm:justify-start sm:w-4/5">
                                <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                    className="min-w-fit h-10 sm:w-10"
                                />
                                <p className="text-lg">+54 2923-992211</p>
                            </div>
                        </li>

                        <p className="text-lg text-center font-bold my-4">Nuestras redes</p>
                        <li className="flex justify-center mb-4 md:mb-8 gap-4">
                            <div>
                                <Link to='https://www.facebook.com/autosmancha.pickups' target="_blank">
                                    <img src="/icono-facebook.svg" alt="icono facebook" 
                                        className="w-12"
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link to='https://www.instagram.com/automotores_mc/' target="_blank">
                                    <img src="/icono-instagram.svg" alt="icono instagram" 
                                        className="w-12"
                                    />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </section>
        </main>
    )
}

export default Contact