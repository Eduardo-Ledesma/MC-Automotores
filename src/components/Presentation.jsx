import '../styles/header.css'
import 'animate.css'

const Presentation = () => {
    return (
        <section className='bg-img__nissan'>
            <div className="flex items-center min-h-full">
                <div className='mx-auto bg-gray-100 opacity-80 px-10 py-6 rounded animate__animated animate__slideInDown'>
                    <h1 className="font-bold text-black text-4xl sm:text-6xl text-center">M&C Automotores</h1>
                    <div className='flex text-center sm:justify-around font-bold text-2xl text-black mt-6'>
                        <p>Joaquín Mangas</p>
                        <p>Francisco Chasvín</p>
                    </div>
                </div>       
            </div>
            
        </section>
    )
}

export default Presentation