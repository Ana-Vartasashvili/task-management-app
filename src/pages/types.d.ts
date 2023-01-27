import { FormikValues } from 'formik'
import { Tasks } from '../types/global'

export type HomeProps = {
  tasksData: Tasks[]
  onDeleteTask: (id: string) => void
  onAddTask: (taskName: string, id: string) => void
}

type FormFields = {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
}

export type AuthFormInputProps = {
  type?: string
  id: string
  placeholder: string
  formikFields: {
    values: FormikValues<FormFields>
    errors?: FormikErrors<FormFields>
    touched?: FormikTouched<FormFields>
    handleChange: (e: ChangeEvent<any>) => void
    handleBlur: (e: FocusEvent<any, Element>) => void
  }
}

export type SignUpInputValues = {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
}

export type LoginInputValues = {
  email: string
  password: string
}
