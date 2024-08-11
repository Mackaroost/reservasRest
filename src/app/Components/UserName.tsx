"use client"
import React from 'react'
import { useStore } from '@/store/useStore';
import { useForm, SubmitHandler } from "react-hook-form"

interface Input{
 name:string
}

const UserName = () => {
  const {onNext, setName} = useStore()
const{register, handleSubmit} = useForm<Input>()
const onSubmit: SubmitHandler<Input> = (data)=> {
 // console.log(data)
  setName(data.name)
  //console.log(name)
  onNext()
  //console.log(name)
}


  return (
    <div className='flex flex-col items-center justify-center'>
      <p className="text-center pt-10 px-4">Ingrese el nombre del responsable de la Reserva</p>
      <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center justify-center'>
      <input
        type="text"
        {...register('name')}
        placeholder="Nombre completo"
        className="mt-4 px-4 py-2 border rounded-md mx-80"
      />
    
      <button className="bg-black text-white font-semibold px-4 py-2 rounded-md mt-4">
        Continuar
      </button>
      </form>
      </div>
  )
}

export default UserName;
