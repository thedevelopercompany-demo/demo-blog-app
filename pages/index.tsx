import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/blogs">
        <a className="text-blue-700 text-xl">Go to blogs</a>
      </Link>
    </div>
  )
}

export default Home
