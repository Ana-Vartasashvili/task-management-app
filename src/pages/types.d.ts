import { Tasks } from '../types/global'

export type HomeProps = {
  tasksData: Tasks[]
  onDeleteTask: (id: string) => void
  onAddTask: (taskName: string, id: string) => void
}

export type FormInputProps = {
  type?: string
  id: string
  placeholder: string
  value: string
  errors?: string
  touched?: boolean
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: FocusEvent<any, Element>) => void
}

export type RegisterInputValues = {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
}
