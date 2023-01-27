import { toast } from 'react-toastify'

export const notify = (message: string) =>
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  })
