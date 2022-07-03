import create from "zustand";
import { persist } from 'zustand/middleware'

let useStore = create(persist(
    (set, get) => ({
    darkMode: false,
    name:"",
    toggleMode: () => set((state) => ({ darkMode: !state.darkMode}) )
    }),
    {
      name: "answer-storage", // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  ))

  export default useStore