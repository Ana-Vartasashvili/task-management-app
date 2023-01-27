const AuthFormCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <div className="h-screen flex items-center bg-black">
        <div className="w-3/5 h-4/5 py-24 mx-auto flex items-center justify-center rounded-[2.5rem] bg-SignUp_card_color">
          <>{props.children}</>
        </div>
      </div>
    </>
  )
}

export default AuthFormCard
