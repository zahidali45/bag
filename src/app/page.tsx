import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.jfif" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        Charming and cozy, this home features a welcoming living space with ample natural light. The well-designed interior includes a modern kitchen, comfortable bedrooms, and a lush garden perfect for relaxation.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Zahid
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Roll No 2284
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page