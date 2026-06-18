import api from "."

const login = async (data) => {
  const res = await api.instance.request.post('/auth/login', data)
  return res.data
}


const getProductCategory = async () => {
  const res = await api.instance.request.get('/product/category')
  return res.data
}

const getProduct = async ({ page, pageSize, search }) => {
  const res = await api.instance.request.get("/product", {
    params: {
      page,
      pageSize
    }
  })
  return res.data
}

const createProduct = async (data) => {
  const res = await api.instance.request.post('/product', data)
  return res.data
}

const deleteProduct = async (id) => {
  const res = await api.instance.request.delete(`/product/${id}`, {

  })

}


export default {
  login,
  getProductCategory,
  createProduct,
  getProduct
}