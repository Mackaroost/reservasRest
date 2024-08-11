import { useStore } from "@/store/useStore"

const Resumen = () => {
    const {nameUser, dia, hora, count, onBack, onNext} = useStore()
    const uniqueId = Date.now() + Math.random().toString(36).substring(2, 9)
  
    return (
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-center py-2">Resumen</h3>
            <div className="space-y-2">
                <p className="text-lg"><strong>Reserva a Nombre:</strong> {nameUser}</p>
                <p className="text-lg"><strong>Cantidad de Personas:</strong> {count}</p>
                <p className="text-lg"><strong>Fecha de Reserva:</strong> {dia}</p>
                <p className="text-lg"><strong>Hora de Reserva:</strong> {hora}</p>
                <p className="text-lg"><strong>Código de Reserva:</strong> {uniqueId}</p>
            </div>

            <div className="flex items-center justify-center gap-x-4 mt-6">
                <button
                    onClick={() => onBack()} 
                    className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    Volver
                </button>

                <button
                onClick={()=> onNext()}
               className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-colors"
      >
        Reservar
      </button>
            </div>
        </div>
    )
}

export default Resumen;
