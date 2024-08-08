"use client"
import { useStore } from "@/store/useStore"


const Persons= () => {
    const {onNext} = useStore()
  return (
    <div className="flex flex-col items-center justify-center pt-14">
        <p className="text-3xl font-bold">Cuantos Personas reservan</p>
        <div className="flex items-center justify-center pt-10">
            <button>-</button>
            <p className="text-2xl">1</p>
            <button>+</button>

        </div>
        <button
        onClick={() => onNext()} 
        className="bg-black text-white font-semibold px-4 py-2 rounded-md mt-8"
      >
        Continuar
      </button>
    </div>
  )
}

export default Persons