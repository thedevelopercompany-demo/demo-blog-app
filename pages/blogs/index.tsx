import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { firebaseAdmin } from '../../lib/firebaseAdmin'
import { BlogType } from '../../types/blog'

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await firebaseAdmin.firestore().collection('blogs').get()

  return {
    props: {
      data: data.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    }
  }
}

const Blog: NextPage<{
  data: BlogType[]
}> = props => {
  const [blogs, setBlogs] = useState<BlogType[]>(props.data)

  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <div key={blog.id} className="border rounded-lg bg-gray-100 p-4">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <Link href={'/blogs/' + blog.id}>
              <a className="text-blue-500 underline m-2">View</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
