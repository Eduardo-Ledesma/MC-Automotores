import { Link } from "react-router-dom"

const Map = () => {
    return (
        <section className="container mx-auto pt-20 pb-10 lg:py-16">
            <div className="flex flex-col md:flex-row justify-center gap-10"> 
                <div className="text-white px-4 text-center md:text-left md:order-2">
                    <h3 className="font-bold text-3xl uppercase">Contactanos</h3>
                    <div className="flex justify-center gap-2 items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ecf01d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <p className="mt-4 text-lg">Castelli 280, Guatraché, La Pampa.</p>
                    </div>
                    
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="flex justify-center md:justify-start gap-2 items-center">
                            <img src="/icono-whatsapp.png" alt="icono whatsapp" 
                                className="w-10"
                            />
                            <p className="text-lg">+54 2923-445566</p>
                        </div>

                        <p className="text-xl mt-2">Seguinos en:</p>

                        <ul className="flex justify-center md:justify-start mb-4 md:mb-8 gap-4">
                            <li>
                                <Link to='https://www.facebook.com/autosmancha.pickups' target="_blank">
                                    <img src="/icono-facebook.svg" alt="icono facebook" 
                                        className="w-12"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link to='https://www.instagram.com/automotores_mc/' target="_blank">
                                    <img src="/icono-instagram.svg" alt="icono instagram" 
                                        className="w-12"
                                    />
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
        
                <div className="w-auto sm:w-2/3 md:w-auto mx-auto md:mx-0 h-64 lg:h-80 lg:mb-4 md:mt-2 lg:w-1/3 md:order-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1579.1320965983641!2d-63.54602252775461!3d-37.66649947035849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e902e581746193%3A0xe766a6508868d220!2sCastelli%20280%2C%20Guatrach%C3%A9%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1691441527094!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Map