import { create } from "zustand"


const useProductStore = create(set => ({
  isOpenCreateModal: false,
  toggleCreateProductModal: (payload) => set({ isOpenCreateModal: payload }),

  isOpenDeleteModal: false,
  deletedProductId: "",
  toggleDeleteProductModal: ({ isOpen, id }) => set({ isOpenDeleteModal: isOpen, deletedProductId: id }),

}))

export default useProductStore 