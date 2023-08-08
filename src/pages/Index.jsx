import { Link } from "react-router-dom"
import Presentation from "../components/Presentation"
import SwiperGalery from "../components/SwiperGalery"
import Brands from "../components/Brands"
import Map from "../components/Map"

const Index = () => {
    return (
        <>
            <Presentation />

            <section className="mt-16 mb-20"> 
                <h2 className="text-3xl font-bold text-gray-700 text-center">Compra y venta de vehículos nuevos y usados exclusivos</h2>
                <p className="text-gray-700 text-center font-bold text-2xl mt-10 md:mt-6">Particulares consignataria - Vendemos tu vehículo</p>
            </section>
            
            <main className="bg-gray-600 py-10">
                <h3 className="text-4xl font-bold text-white text-center">Nuestros Vehículos</h3>
                <SwiperGalery />
                <div className="flex mt-4 pb-4">
                    <Link to='/cars'
                        className="mx-auto bg-gray-300 px-3 py-2 rounded-md font-bold w-4/5 md:w-2/5 lg:w-1/5 text-center text-xl
                            transition-transform hover:scale-110"
                    >Ver todos</Link>
                </div>
            </main>

            <section className="my-20 px-4">
                <Brands />
            </section>

            <article className="bg-gray-600">
                <Map />
            </article>
        </>
    )
}

export default Index