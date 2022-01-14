// import { useSession } from 'next-auth/react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Component from './components'
const HomePage = () => {
  const { data: session } = useSession()

  return (
    <div>
      {!session ? (
        <>
          <h1>plase signinsda</h1>
          <h3 onClick={signIn}>signin</h3>
        </>
      ) : (
        <>
          <div>Lorem, ipsum dolor.</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            molestias, totam possimus neque ipsam sit magni quam accusamus dolor
            tenetur? Architecto fugiat perspiciatis explicabo perferendis, quos
            mollitia enim ut quasi eligendi maxime culpa soluta porro rem earum
            ratione deserunt magnam?
          </div>
          <Component />
        </>
      )}
    </div>
  )
}

export default HomePage
