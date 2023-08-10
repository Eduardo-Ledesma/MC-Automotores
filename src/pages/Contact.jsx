import { useEffect } from "react"
import { Link } from "react-router-dom"
import FormContact from "../components/FormContact"

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-gradient-to-br from-slate-800 to-green-900 pt-14">
            <h1 className="font-bold text-3xl sm:text-5xl text-center mb-20">Contactanos</h1>

            <section className="container mx-auto pb-16">
                <p className="text-lg md:text-xl px-2 text-center font-bold mb-2">A continuación escribí tus datos en el formulario y hacenos llegar tu mensaje,</p>
                <p className="text-lg md:text-xl px-2 text-center font-bold">o sino también podes contactarnos mediante nuestras redes o whatsapp</p>
                
                <div className="mt-10 px-4 sm:px-10 py-10 border-2 rounded-md w-full lg:w-4/5 mx-auto shadow__total
                    grid lg:grid-cols-2 gap-10"
                >
                    <FormContact />

                    <ul className="mt-10">
                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
                            <p className="font-bold w-1/5">M&C</p>
                            <div className="flex w-full items-center sm:justify-start gap-2 sm:w-4/5">
                                <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                    className="min-w-fit h-10 sm:w-10"
                                />
                                <p className="text-lg">+54 2923-667788</p>
                            </div>
                        </li>

                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
                            <p className="font-bold w-1/5">Joaquín</p>
                            <div className="flex w-full items-center sm:justify-start gap-2 sm:w-4/5">
                                <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                    className="min-w-fit h-10 sm:w-10"
                                />
                                <p className="text-lg">+54 2923-332244</p>
                            </div>
                        </li>

                        <li className="flex flex-col sm:flex-row gap-2 sm:items-center mb-4">
                            <p className="font-bold w-1/5">Francisco</p>
                            <div className="flex w-full items-center sm:justify-start gap-2 sm:w-4/5">
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