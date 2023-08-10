import '../styles/border.css'

const FormContact = () => {
  return (
    <form>
      <fieldset>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="name" className="text-lg font-bold text-gray-700">Nombre y Apellido</label>
          <input type="text" 
            name="name"
            id="name"
            placeholder="Nombre y Apellido"
            className="border-b border-gray-600 py-2 px-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email" className="text-lg font-bold text-gray-700">Email</label>
          <input type="email" 
            name="email"
            id="email"
            placeholder="Email"
            className="border-b border-gray-600 py-2 px-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="phone" className="text-lg font-bold text-gray-700">Teléfono</label>
          <input type="number" 
            name="phone"
            id="phone"
            placeholder="Teléfono"
            className="border-b border-gray-600 py-2 px-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="reason" className="text-lg font-bold text-gray-700">Asunto</label>
          <input type="text" 
            name="reason"
            id="reason"
            placeholder="Asunto"
            className="border-b border-gray-600 py-2 px-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <label htmlFor="message" className="text-lg font-bold text-gray-700">Mensaje</label>
          <textarea 
            name="message"
            id="message"
            rows={5}
            className="border border-gray-600 py-2 px-3 focus:outline-none focus:border-blue-600"
          />
        </div>
      </fieldset>
      
      <div className='flex'>
        <input type="submit" 
          className="sm:mx-auto border-2 px-4 py-2 w-full text-center font-bold uppercase text-xl border-gray-800
          hover:bg-gray-800 hover:text-white transition-color duration-500 tracking-widest hover:cursor-pointer"
        />
      </div>
      
    </form>
  )
}

export default FormContact