import { create } from "zustand";


interface reservaState {
    step: number;
    onNext:()=> void;
    onBack:()=> void;
    showForm: boolean;
    onStarForm: ()=>void;
    nameUser: string;
    setName:(nameUser:string)=>void; // funcion que actualiza el nombre en el estado
}

export const useStore = create<reservaState>((set)=>({
step : 1,
onNext : ()=> set((state)=>({step: state.step + 1})),
onBack:()=> set((state)=>({step:state.step - 1})),
showForm: false,
onStarForm: ()=> set({showForm: true}),
nameUser:'',
setName:(nameUser:string)=> set({nameUser})// toma un nombre y lo asigna a name
}))