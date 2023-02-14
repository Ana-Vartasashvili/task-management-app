import errorIllustration from '../../illustrations/Error.png'

const PageNotFound = () => {
  return (
    <div className="text-white flex justify-center px-10">
      <div className="w-full max-w-[40rem] mt-32 sm:w-[55rem] md:max-w-[47rem]">
        <img src={errorIllustration} alt="illustration a boy falling down" />
      </div>
    </div>
  )
}

export default PageNotFound
