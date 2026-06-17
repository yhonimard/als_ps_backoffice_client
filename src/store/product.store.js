import { create } from "zustand"


const productStore = create(set => ({
  isOpenModal: false,


  toggleModal: (payload) => set(s => ({ isOpenModal: payload }))
}))

export default productStore