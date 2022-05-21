import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { firebaseAdmin } from '../../lib/firebaseAdmin'
import { BlogType } from '../../types/blog'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const blogId = query.blogId as string

  const doc = await firebaseAdmin
    .firestore()
    .collection('blogs')
    .doc(blogId)
    .get()

  return {
    props: {
      data: {
        id: doc.id,
        ...doc.data()
      }
    }
  }
}

const Blog: NextPage<{ data: BlogType }> = props => {
  return (
    <div>
      <Head>
        <title>{props.data.title}</title>
      </Head>
      <h1 className="text-2xl font-bold">{props.data.title}</h1>
      <p className="text-lg text-gray-800">{props.data.description}</p>
    </div>
  )
}

export default Blog
