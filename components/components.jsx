import { useSession, signIn, signOut } from 'next-auth/react'

const components = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      {session ? (
        <>
          <img src={session?.user?.image} alt="" />
          <h1>Hello {session?.user?.name}</h1>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  )
}

export default components
