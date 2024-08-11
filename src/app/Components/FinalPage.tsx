
import { useStore } from '@/store/useStore';

const FinalPage = () => {
    const { onBack, reset } = useStore();
    

    const handleReset = () => {
        reset();
    };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold py-10 '>Muchas gracias por reservar, ¡te esperamos! 🛎️</h2>
            <div className="flex items-center justify-center mt-6 gap-4">
                <button
                    onClick={() => onBack()} 
                    className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    Volver
                </button>
                <button
                    onClick={handleReset} 
                    className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                    Inicio
                </button>
            </div>
        </div>
    );
};

export default FinalPage;
