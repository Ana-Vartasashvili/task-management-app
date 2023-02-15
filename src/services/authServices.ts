import axios from './axios'

export const registerUser = async (values: any) => {
  return await axios.post('/auth/sign-in', values)
}
