import { useMutation } from "@tanstack/react-query"
import api from "../api"

const useCreateProduct = ({ resetForm }) => {


  return useMutation({
    mutationFn: async (data) => {
      const res = await api.request.createProduct(data)
      console.log("Response : ", res);
      return res
    },
    onMutate: () => { },
    onError: () => { },
    onSuccess: () => { },
  })
}


export default {
  useCreateProduct
}