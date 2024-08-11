
"use client"
import Layout from "./Components/Layout";
import UserName from "./Components/UserName";
import Persons from "./Components/Persons";
import DateReserv from "./Components/DateReserv";
import Resumen from "./Components/Resumen";
import FinalPage from "./Components/FinalPage";
import { useStore } from "@/store/useStore";


export default function Home() {

const {step, showForm, onStarForm} = useStore()
 

  return (
    <Layout>
      {
        !showForm ? (
          <div className="flex flex-col items-center justify-center content-center p-4">
          <p className="text-center pt-10 px-4">
            Bienvenidos a nuestro sistema de reserva de turnos, a continuación, completa los datos
          </p>
          <button
            onClick={onStarForm}
            className="mt-10 bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Reservar
          </button>
        </div>

        ) :(
          <div className="flex flex-col items-center justify-center content-center p-4">
          {step === 1 && <UserName/>}
          {step === 2 && <Persons/>}
          {step === 3 && <DateReserv/>}
          {step === 4 && <Resumen/>}
          {step === 5 && <FinalPage/>}
          

     
        </div>
        )
      }
    </Layout>
  );
}

