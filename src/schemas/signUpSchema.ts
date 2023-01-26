import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(15, 'First name is too long')
    .required('Required field'),

  last_name: yup
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name is too long')
    .required('Required field'),

  email: yup.string().email('Invalid email address').required('Required field'),

  password: yup
    .string()
    .required('Required field')
    .min(6, 'Password must be at least 6 characters long'),

  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
})
