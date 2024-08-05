"use client"
import React from 'react'

interface FunctioNextProps {
  onNext: (step: number) => void;
}

const UserName: React.FC<FunctioNextProps> = ({ onNext }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className="text-center pt-10 px-4">Ingrese el nombre del responsable de la Reserva</p>
      <input
        type="text"
        placeholder="Ingresa tu nombre completo"
        className="mt-4 px-4 py-2 border rounded-md"
      />
      <button
        onClick={() => onNext(2)} 
        className="bg-black text-white font-semibold px-4 py-2 rounded-md mt-4"
      >
        Continuar
      </button>
    </div>
  )
}

export default UserName;
