import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required field'),

  password: yup
    .string()
    .required('Required field')
    .min(6, 'Password must be at least 6 characters long'),
})
