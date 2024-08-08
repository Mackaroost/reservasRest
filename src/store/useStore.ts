import { create } from "zustand";


interface reservaState {
    step: number;
    onNext:()=> void;
    showForm: boolean;
    onStarForm: ()=>void
}

export const useStore = create<reservaState>((set)=>({
step : 1,
onNext : ()=> set((state)=>({step: state.step + 1})),
showForm: false,
onStarForm: ()=> set({showForm: true})
}))