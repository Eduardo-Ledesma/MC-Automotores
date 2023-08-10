import { useEffect } from "react"
import CarsSection from "../components/CarsSection"

const Cars = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-gradient-to-br from-slate-800 to-green-800 pt-14 pb-10">
            <h2 className="font-bold text-5xl text-center mb-20">Nuestros Vehículos</h2>

            <CarsSection />
        </main>
    )
}

export default Cars