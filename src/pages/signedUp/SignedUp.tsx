import { Link } from 'react-router-dom'
import signedUpIllustration from '../../illustrations/Success.png'

const SignedUp = () => {
  return (
    <div className="h-screen flex items-center justify-center px-8">
      <div className="flex justify-center flex-col items-center ">
        <img
          src={signedUpIllustration}
          alt="simple illustration of boy sitting on a mountain"
          className="w-[38rem]"
        />
        <h1 className="text-4xl text-textColor_lightGray">All Done!</h1>
        <p className="text-gray text-m">
          Go to{' '}
          <Link to="/sign-in" className="underline">
            sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignedUp
