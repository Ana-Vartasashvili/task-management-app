import { AuthFormInputProps } from '../../pages/types'

const AuthFormInput: React.FC<AuthFormInputProps> = (props) => {
  const { id, placeholder, type, formikFields } = props
  const { values, errors, touched, handleBlur, handleChange } = formikFields

  return (
    <div className="w-full h-20">
      <input
        type={type ? type : 'text'}
        id={id}
        placeholder={placeholder}
        value={values?.[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`outline-none w-full px-8 py-3 rounded-2xl border-[1.9px] border-white focus:border-lightBlue focus:border-solid ${
          errors[id] && touched[id] && '!border-red placeholder:opacity-70'
        }`}
      />

      {errors[id] && touched[id] && (
        <p className="p-0  text-[1.1rem] text-red">{errors[id]}</p>
      )}
    </div>
  )
}

export default AuthFormInput
