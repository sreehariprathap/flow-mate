import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn
} from '@clerk/nextjs'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SignIn />
    </div>
  )
}
export default page