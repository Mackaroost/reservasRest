import { MouseEventHandler } from "react";
import { create } from "zustand";


interface reservaState {
    step: number;
    onNext:()=> void;
    onBack:()=> void;
    showForm: boolean;
    onStarForm: ()=>void;
    nameUser: string;
    setName:(nameUser:string)=>void; // funcion que actualiza el nombre en el estado
    count: number;
    addCount: ()=> void;
    decreCount:()=> void;
    dia:string;
    setDia: (dia:string)=>void;
    hora: string;
    setHora:(hora:string)=> void
    reset: ()=>void
}

export const useStore = create<reservaState>((set)=>({
step : 1,
onNext : ()=> set((state)=>({step: state.step + 1})),
onBack:()=> set((state)=>({step:state.step - 1})),
showForm: false,
onStarForm: ()=> set({showForm: true}),
nameUser:'',
setName:(nameUser:string)=> set({nameUser}),// toma un nombre y lo asigna a name
count:1,
addCount: ()=> set((state)=>({count: state.count + 1})),
decreCount: ()=> set((state)=>({count:state.count - 1})),
dia:'',
setDia:(dia:string)=>set({dia}),
hora:'',
setHora:(hora:string)=>set({hora}),
reset: () => set({ // Resetear todos los valores a los iniciales
    step: 1,
    showForm: false,
    nameUser: '',
    dia: '',
    hora: '',
    count: 1,
}),
}))