import { useState, useEffect } from "react"
import '../styles/border.css'

const FormContact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    

    console.log({ name, email, phone, reason, message })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="name" className="text-lg font-bold">Nombre y Apellido</label>
          <input type="text" 
            name="name"
            id="name"
            placeholder="Nombre y Apellido"
            className="border-b border-gray-200 py-2 px-3 focus:outline-none focus:border-blue-600 bg-transparent"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email" className="text-lg font-bold">Email</label>
          <input type="email" 
            name="email"
            id="email"
            placeholder="Email"
            className="border-b border-gray-200 py-2 px-3 focus:outline-none focus:border-blue-600 bg-transparent"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="phone" className="text-lg font-bold">Teléfono</label>
          <input type="number" 
            name="phone"
            id="phone"
            placeholder="Teléfono"
            className="border-b border-gray-200 py-2 px-3 focus:outline-none focus:border-blue-600 bg-transparent"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="reason" className="text-lg font-bold">Asunto</label>
          <input type="text" 
            name="reason"
            id="reason"
            placeholder="Asunto"
            className="border-b border-gray-200 py-2 px-3 focus:outline-none focus:border-blue-600 bg-transparent"
            value={reason}
            onChange={e => setReason(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <label htmlFor="message" className="text-lg font-bold">Mensaje</label>
          <textarea 
            name="message"
            id="message"
            rows={5}
            className="border border-gray-200 py-2 px-3 focus:outline-none focus:border-blue-600 bg-transparent"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </fieldset>
      
      <div className='flex'>
        <input type="submit" 
          className="sm:mx-auto border-2 px-4 py-2 w-full text-center font-bold uppercase text-xl
          hover:bg-gray-200 hover:text-gray-800 transition-color duration-500 tracking-widest hover:cursor-pointer"
        />
      </div>
      
    </form>
  )
}

export default FormContact