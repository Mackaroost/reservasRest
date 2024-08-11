
import { useStore } from "@/store/useStore"
import { useForm, SubmitHandler} from "react-hook-form"

interface Options{
    dia:string;
    horario:string;
}

const DateReserv = () => {
    const {onNext, onBack,setDia, setHora} = useStore()
    const {register, handleSubmit}= useForm<Options>()
    const onSubmit: SubmitHandler<Options> = (data) => {
        console.log(data)
        setDia(data.dia)
        setHora(data.horario)
        onNext()
       
      };

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col items-center justify-center py-8 container mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center">Selecciona tu Horario</h2>

  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl content-center"
  >
    <div className="bg-red-600 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Días</h3>
      <select
        id="dias"
        {...register('dia')}
        className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="Miercoles">Miércoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sábado</option>
        <option value="Domingo">Domingo</option>
      </select>
    </div>

    <div className="bg-slate-600 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Horarios</h3>
      <select
        {...register('horario')}
        id="horarios"
        className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        <option value="7:30-9:00">7:30 PM - 9:00 PM</option>
        <option value="9:15-10:45">9:15 PM - 10:45 PM</option>
        <option value="11:00-12:00">11:00 PM - 12:00 AM</option>
        <option value="12:15-1:30">12:15 PM - 1:30 PM</option>
      </select>
    </div>
  </div>
  <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => onBack()}
        className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
      >
        Volver
      </button>
      <button
        type="submit"
        className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-colors"
      >
        Continuar
      </button>
    </div>
</form>


  )
}

export default DateReserv