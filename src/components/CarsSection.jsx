import { useNavigate } from 'react-router-dom'
import useApp from "../hooks/useApp"
import 'animate.css'


const CarsSection = () => {

    const navigate = useNavigate()
    const { cars } = useApp()

    const handleClick = id => {
        navigate(`/cars/${id}`)
    }

    return (
        
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-10 flex-wrap container mx-auto px-4">
            
            { cars.map((car, i) => (
                <div key={i} className="pb-2 hover:cursor-pointer border-b-2 border-gray-500 hover:border-yellow-600 animate__animated animate__fadeIn"
                    onClick={() => handleClick(i)}
                >
                    <div className="overflow-hidden hover:cursor-pointer shadow-2xl">
                        <img loading='lazy' src={`/img/${car}.webp`} alt={`foto auto${i}`} className="hover:scale-110 w-full transition-transform duration-500" />
                    </div>
                    <div className="mt-4 pl-2 pb-6">
                        <p className="text-2xl uppercase font-bold mb-2">Ford Eco Sport</p>
                        <p className="text-xl font-bold text-amber-500 mb-2">Modelo 2013</p>
                        <p className="">Version SE</p>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default CarsSection