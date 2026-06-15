import { create } from "zustand"
import { persist } from "zustand/middleware"


const useAuthStore = create(persist(
  (set) => ({
    user: null,
    isAuthenticated: false,

    setLogin: (user) => set({
      user,
      isAuthenticated: true
    }),
    setLogout: () => ({
      user: null,
      isAuthenticated: false
    })
  }),
  {
    name: 'auth-store'
  }
))


export default useAuthStore