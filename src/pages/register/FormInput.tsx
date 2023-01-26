import { formInputProps } from '../types'

const FormInput: React.FC<formInputProps> = (props) => {
  const { id, placeholder, value, onChange, onBlur, type, errors, touched } =
    props

  return (
    <div className="w-full">
      <input
        type={type ? type : 'text'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`outline-none w-full px-8 py-5 rounded-2xl border-[2px] focus:border-lightBlue ${
          errors &&
          touched &&
          'border-red placeholder:text-red placeholder:opacity-70'
        }`}
      />

      {errors && touched && (
        <p className="p-0 mt-1 text-[1.3rem] text-red">{errors}</p>
      )}
    </div>
  )
}

export default FormInput
