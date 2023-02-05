import { Link } from 'react-router-dom'
import signedUpIllustration from '../../illustrations/Success.png'

const SignedUp = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center flex-col items-center ">
        <img
          src={signedUpIllustration}
          alt="simple illustration of boy sitting on a mountain"
          className="w-[36rem]"
        />
        <h1 className="text-4xl text-darkBlue">All Done!</h1>
        <p className="text-textColor_darkGray text-m">
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
