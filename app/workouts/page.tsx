import Link from 'next/link'
import React from 'react'
import Todolist from './TodosList'

const page = () => {
  return (
    <div>
      <Link href = '/' className='bg-purple-500 rounded-lg p-2 text-bold text-xl'>Go back to home</Link>
      {/*@ts-ignore */}
      <Todolist />
    </div>
  )
}

export default page
