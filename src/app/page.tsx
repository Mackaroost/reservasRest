
"use client"
import Layout from "./Components/Layout";
import { useState } from "react";
import UserName from "./Components/UserName";

export default function Home() {
  const[showForm, setShowForm] = useState(false)
  const[step, setStep]= useState(1)

  const handleStartForm = ()=>{
    setShowForm(true)
  }

  const handleNext = ()=>{
    setStep(step + 1)
  }
  return (
    <Layout>
      {
        !showForm ? (
          <div className="flex flex-col items-center justify-center content-center">
          <p className="text-center pt-10 px-4">
            Bienvenidos a nuestro sistema de reserva de turnos, a continuación, completa los datos
          </p>
          <button
            onClick={handleStartForm}
            className="mt-10 bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Reservar
          </button>
        </div>

        ) :(
          <div className="flex flex-col items-center justify-center content-center">
          {step === 1 && <UserName onNext = {handleNext}/>}
          {/* Añade condiciones para renderizar las demás preguntas */}
        </div>
        )
      }
    </Layout>
  );
}

