
const Brands = () => {
    return (
        <>
            {/* <div className="flex flex-wrap items-center justify-around"> */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 items-center">
                <div className="mx-auto">
                    <img src="/img/logos/fiat-logo.png" alt="logo fiat" className="w-32" />
                </div>
                
                <div className="mx-auto">
                    <img src="/img/logos/chevrolet-logo.png" alt="logo chevrolet" className="w-32" />
                </div>
                
                <div className="mx-auto">
                    <img src="/img/logos/toyota-logo.png" alt="logo toyota" className="w-32" />
                </div>

                <div className="mx-auto">
                    <img src="/img/logos/ford-logo.png" alt="logo ford" className="w-32" />
                </div>

                <div className="mx-auto">
                    <img src="/img/logos/peugeot-logo.png" alt="logo peugeot" className="w-32" />
                </div>

                <div className="mx-auto">
                    <img src="/img/logos/volkswagen-logo.png" alt="logo volkswagen" className="w-32" />
                </div>

                <div className="mx-auto">
                    <img src="/img/logos/citroen-logo.png" alt="logo citroen" className="w-32" />
                </div>
            </div>
        </>
    )
}

export default Brands