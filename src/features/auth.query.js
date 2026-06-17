import { useMutation } from "@tanstack/react-query"
import api from "../api"
import { useNavigate } from "react-router"
import useAuthStore from "../store/auth.store"
import { enqueueSnackbar } from "notistack"

const useLoginMutation = () => {
  const navigate = useNavigate()

  const login = useAuthStore(s => s.setLogin)

  return useMutation({
    mutationFn: api.request.login,
    onSuccess: (data, _var) => {
      login(data)
      navigate("/")
    },
    onError: () => {
      enqueueSnackbar({ message: "username atau password salah bang", variant: "error" })
    }
  })
}

export default useLoginMutation