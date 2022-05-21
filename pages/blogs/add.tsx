import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { NextPage } from 'next'
import { firebaseApp } from '../../lib/firebase'

const AddBlog: NextPage = () => {
  return (
    <div>
      <form
        className="flex flex-col px-48"
        onSubmit={async event => {
          event.preventDefault()

          const obj = {
            title: (event.currentTarget as any).title.value,
            description: (event.currentTarget as any).description.value
          }

          const store = getFirestore(firebaseApp)

          const blogsCollection = collection(store, 'blogs')

          await addDoc(blogsCollection, obj)
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Input Title here"
          className="border m-1"
          required
        />
        <textarea name="description" rows={3} className="border m-1" required />

        <button type="submit" className="px-2 py-1 bg-violet-500 w-48">
          Add new blog
        </button>
      </form>
    </div>
  )
}

export default AddBlog
