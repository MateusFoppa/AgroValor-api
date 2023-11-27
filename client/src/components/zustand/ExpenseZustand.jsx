import { create } from 'zustand'

export const useUpdateStore = create((set) => ({
  event: {},
  setEvent: () => set((state) => ({ event: state.event }))
}))
