import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api-of-todos.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default axiosInstance
