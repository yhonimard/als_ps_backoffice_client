import { useMutation } from "@tanstack/react-query"
import api from "../api"
import { useNavigate } from "react-router"
import useAuthStore from "../store/auth.store"

const useLoginMutation = () => {
  const navigate = useNavigate()

  const login = useAuthStore(s => s.setLogin)

  return useMutation({
    mutationFn: api.request.login,
    onSuccess: (data, _var) => {
      login(data)
      navigate("/")
    }
  })
}

export default useLoginMutation