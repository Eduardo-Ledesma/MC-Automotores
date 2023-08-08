import { Link } from "react-router-dom"
import "../styles/header.css"


const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                <nav className="mx-auto md:mx-0 py-10 md:py-0">
                    <ul className="flex flex-col sm:flex-row gap-6">
                        <li>
                            <Link to="/"
                                className="nav_link"
                            >Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/"
                                className="nav_link"
                            >Vehículos</Link>
                        </li>
                        <li>
                            <Link to="/"
                                className="nav_link"
                            >Contacto</Link>
                        </li>
                    </ul>
                </nav>

                <div className="py-4 mx-auto md:mx-0">
                    <Link to="/">
                        <img src="/img/LogoMC.jpeg" alt="Logo MC" 
                            className="w-64"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer