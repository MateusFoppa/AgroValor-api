import { create } from 'zustand'

export const useUpdateStore = create((set) => ({
  update: 0,
  increasePopulation: () => set((state) => ({ update: state.update + 1 }))
}))
