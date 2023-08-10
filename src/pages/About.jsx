

const About = () => {
    return (
        <main className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 px-4 md:px-10 mt-20">
                <div className="order-2 lg:order-1 mb-4 overflow-hidden">
                    <img src="/img/auto-carretera.png" alt="Imagen MC-Automotores" 
                        className="hover:scale-110 transition-transform duration-500 hover:cursor-pointer"/>
                </div>
                <div className="order-1 lg:order-2 mb-4">
                    <h3 className="font-bold text-3xl text-center mb-8">¿Por qué comprar con nosotros?</h3>

                    <p className="text-xl text-justify">Morbi bibendum augue erat, ut porttitor quam porttitor in. Maecenas vitae turpis vulputate, porta nulla in, faucibus neque. Nunc imperdiet sagittis turpis sed interdum. Integer at ex magna. Nam nec vulputate nisl. Proin semper consequat tempor. Nullam vel convallis massa, a dapibus sapien. Phasellus scelerisque non neque at posuere. Ut iaculis libero id mi tincidunt vulputate.</p>
                </div>

                <p className="order-3 text-xl lg:col-start-1 lg:col-end-3 text-justify">
                    Donec cursus, nibh in malesuada pellentesque, purus lacus vehicula tortor, et porta velit risus at enim. Nunc semper varius augue, vitae interdum erat vulputate tristique. Nulla non massa vitae ipsum eleifend aliquet a scelerisque sapien. Nam eget sodales est, vel auctor justo. Nullam eget erat sapien. Proin eget ullamcorper risus. Donec vulputate augue velit, ut laoreet arcu aliquam nec.
                </p>
                
                <p className="order-4 text-xl mt-4 md:mt-0 lg:col-start-1 lg:col-end-3 text-justify">
                    Maecenas dictum, mauris commodo vulputate luctus, ex felis elementum arcu, sed euismod augue massa ut tellus. Donec ultricies tortor neque, et viverra mi malesuada ac. Quisque vel convallis nisl, id egestas lacus. Sed nec mi et sem commodo ornare.
                </p>
            </div>

            <div className="border-t border-gray-600 mx-4 md:mx-10 my-16"></div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-y-6 px-10">
                <div className="mx-auto flex flex-col">
                    <div className="mx-auto">
                        <svg width="5em" height="5em" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f37f04" d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10L14 16.59z"></path>
                            <path fill="#f37f04" d="m16 30l-6.176-3.293A10.982 10.982 0 0 1 4 17V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v13a10.982 10.982 0 0 1-5.824 9.707ZM6 4v13a8.985 8.985 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.985 8.985 0 0 0 26 17V4Z"></path>
                        </svg>
                    </div>
                    
                    <p className="md:text-lg text-center">Manejá con confianza en tu vehículo</p>
                </div>
                
                <div className="mx-auto flex flex-col">
                    <div className="mx-auto">
                        <svg width="5em" height="5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f37f04" d="M11.861 2.39a3 3 0 0 1 3.275-.034L19.29 5H21a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1.52a2.65 2.65 0 0 1-1.285 2.449l-5.093 3.056a2 2 0 0 1-2.07-.008a2 2 0 0 1-2.561.073l-5.14-4.039a2.001 2.001 0 0 1-.565-2.446A2 2 0 0 1 2 13.51V6a1 1 0 0 1 1-1h4.947l3.914-2.61ZM4.173 13.646l.692-.605a3 3 0 0 1 4.195.24l2.702 2.972a3 3 0 0 1 .396 3.487l5.008-3.005a.657.657 0 0 0 .279-.79l-4.427-6.198a1 1 0 0 0-1.101-.377l-2.486.745a3 3 0 0 1-2.983-.752l-.293-.292A1.997 1.997 0 0 1 5.68 7H4v6.51l.173.135Zm9.89-9.602a1 1 0 0 0-1.093.012l-5.4 3.6l.292.293a1 1 0 0 0 .995.25l2.485-.745a3 3 0 0 1 3.303 1.13L18.515 14H20V7h-.709a2 2 0 0 1-1.074-.313l-4.155-2.644ZM6.181 14.545l-1.616 1.414l5.14 4.039l.705-1.232a1 1 0 0 0-.129-1.169L7.58 14.625a1 1 0 0 0-1.398-.08Z"></path>
                        </svg>
                    </div>
                    <p className="md:text-lg text-center">Brindamos seguridad en nuestros negocios</p>
                </div>

                <div className="mx-auto flex flex-col sm:col-start-1 sm:col-end-3 md:col-start-auto md:col-end-auto">
                    <div className="mx-auto">
                        <svg width="5em" height="5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f37f04" d="M15 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m-1 2h1.5v3.78l2.33 2.33l-1.06 1.06L14 12.4V8M2 18a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3.83c.31.71.71 1.38 1.17 2H2m1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h2.05L5 12l.05 1H3m1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3c-.46.62-.86 1.29-1.17 2H4Z"></path>
                        </svg>
                    </div>
                    <p className="md:text-lg text-center">Ahorrá tiempo buscando lo que querés</p>
                </div>
            </div>
            
        </main>
    )
}

export default About