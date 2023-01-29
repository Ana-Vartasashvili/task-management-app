import { FormikValues } from 'formik'
import { Tasks } from '../types/global'

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
