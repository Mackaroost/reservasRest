"use client"
import { useStore } from "@/store/useStore"


const Persons= () => {
    const {onNext, onBack,nameUser, count, addCount, decreCount} = useStore()
  return (
    <div className="flex flex-col items-center justify-center pt-14 container mx-auto p-4">
    <p className="text-3xl font-bold text-center">
      Cuántas personas reservan, Sr.{nameUser}
    </p>
    <div className="flex items-center justify-center pt-10 bg-slate-850">
      <button
        onClick={() => void decreCount()}
        className="bg-blue-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        -
      </button>
      <p className="text-4xl font-bold p-6 w-24 h-24 text-center rounded-full bg-slate-800 text-slate-50 mx-4">
        {count}
      </p>
      <button
        onClick={() => void addCount()}
        className="bg-green-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        +
      </button>
    </div>
        
        <div className="flex item-center justify-center gap-x-4">
        <button
        onClick={() => onBack()} 
        className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md mt-8"
      >
    Volver
      </button>
        <button
        onClick={() => onNext()} 
        className="bg-black text-white font-semibold px-4 py-2 rounded-md mt-8"
      >
        Continuar
      </button>
      </div>
    </div>
  )
}

export default Persons