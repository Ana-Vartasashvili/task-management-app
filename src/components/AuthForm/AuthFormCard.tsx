const AuthFormCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <div className="w-screen h-screen flex items-center bg-black_main">
        <div className="w-screen h-4/5 py-24 mx-auto flex items-center px-16 justify-center rounded-[2.5rem] bg-black_main sm:bg-SignUp_card_color sm:w-3/5 sm:px-16">
          <>{props.children}</>
        </div>
      </div>
    </>
  )
}

export default AuthFormCard
