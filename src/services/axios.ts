import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api-of-todos.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  async (error) => {
    if (error?.response?.status === 403) {
      window.location.replace('/sign-in')
      localStorage.removeItem('token')
    } else return Promise.reject(error)
  }
)

export default axiosInstance
