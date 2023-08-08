import { useNavigate } from 'react-router-dom'
import useApp from "../hooks/useApp"
import 'animate.css'


const CarsSection = ({ CARS }) => {

    const navigate = useNavigate()
    const { cars } = useApp()

    const handleClick = id => {
        navigate(`/cars/${id}`)
    }

    return (
        
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-10 flex-wrap container mx-auto px-4">
            
            { cars.map((car, i) => (
                <div key={i} className="pb-4 border-b-2 border-yellow-600 animate__animated animate__fadeIn">
                    <div className="overflow-hidden hover:cursor-pointer shadow-2xl"
                        onClick={() => handleClick(i)}
                    >
                        <img loading='lazy' src={`/img/${car}.webp`} alt="foto auto1" className="hover:scale-110 w-full transition-transform" />
                    </div>
                    <div className="mt-4 pl-2 pb-6">
                        <p className="text-2xl uppercase font-bold mb-2">Honda Civic</p>
                        <p className="text-xl font-bold text-gray-600 mb-2">Modelo: 2014</p>
                        <p className="">Version LXS AUTOMÁTICO FULL</p>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default CarsSection