import { FormikValues } from 'formik'
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

  formikFields: {
    values: FormikValues<{
      first_name: string
      last_name: string
      email: string
      password: string
      password_confirmation: string
    }>

    errors?: FormikErrors<{
      first_name: string
      last_name: string
      email: string
      password: string
      password_confirmation: string
    }>

    touched?: FormikTouched<{
      first_name: string
      last_name: string
      email: string
      password: string
      password_confirmation: string
    }>

    handleChange: (e: ChangeEvent<any>) => void
    handleBlur: (e: FocusEvent<any, Element>) => void
  }
}

export type RegisterInputValues = {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
}
