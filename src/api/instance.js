import axios from "axios"

const request = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})

let token;

const setup = _token => token = _token

request.interceptors.request.use(config => {
  if (!config.url.startsWith('/auth'))

    config.headers.setAuthorization(`Bearer ${token}`)
  return config
})

export default {
  setup,
  request
}