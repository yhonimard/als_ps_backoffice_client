import { create } from "zustand"


const useProductStore = create(set => ({
  isOpenModal: false,

  toggleModal: (payload) => set({ isOpenModal: payload })
}))

export default useProductStore 