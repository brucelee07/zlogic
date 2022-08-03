import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  date: string
  summary?: string
  slug: string
}
const Card: React.FC<Props> = ({ title, date, summary, slug }) => (
  <Link href={'/blog/' + slug}>
    <a className='flex pl-5 flex-col items-center bg-white rounded-lg shadow-md md:flex-row  hover:bg-gray-100'>
      <Image
        className='object-cover w-full h-48 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
        src='https://flowbite.com/docs/images/blog/image-4.jpg'
        width={120}
        height={48}
        alt=''
      />
      <div className='flex flex-col justify-between p-2 pl-8 leading-normal'>
        <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
          {title}
        </h5>
        <p className='mb-1 font-normal text-gray-700'>{summary}</p>
        <p className='text-sm text-gray-700'>{date}</p>
      </div>
    </a>
  </Link>
)

export default Card
