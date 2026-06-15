import api from "."

const login = async (data) => {
  const res = await api.instance.request.post('/auth/login', data)
  return res.data
}


export default {
  login
}