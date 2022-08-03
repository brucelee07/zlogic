import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { MouseEventHandler, useState } from 'react'

type Props = {
  title: string
  currentRoute: Boolean
  link: string
  onclick?: MouseEventHandler
}

type ToggleProps = {
  onclick: MouseEventHandler
}

const ToggleButton: React.FC<ToggleProps> = ({ onclick }) => (
  <button
    className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-gray-200'
    onClick={onclick}
  >
    <svg
      className='w-6 h-6'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
        clipRule='evenodd'
      ></path>
    </svg>
  </button>
)

const MobileLinke: React.FC<Props> = ({
  title,
  link,
  currentRoute,
  onclick,
}) => (
  <Link href={link}>
    <a
      className={`w-full text-center p-2 rounded-md hover:bg-zinc-200 ${
        currentRoute ? 'bg-zinc-200' : ''
      }`}
      onClick={onclick}
    >
      {title}
    </a>
  </Link>
)
const SingleLinke: React.FC<Props> = ({ title, link, currentRoute }) => (
  <Link href={link}>
    <a
      className={`invisible md:visible w-20 text-center p-2 rounded-md hover:bg-zinc-200 ${
        currentRoute ? 'bg-zinc-200' : ''
      }`}
    >
      {title}
    </a>
  </Link>
)

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  let currentRoute = router.pathname
  if (currentRoute.includes('/blog/')) {
    currentRoute = '/blog'
  }
  if (currentRoute.includes('/work/')) {
    currentRoute = '/work'
  }

  const menus = [
    ['首页', '/'],
    ['博客', '/blog'],
    ['作品', '/work'],
    ['关于', '/about'],
  ]
  return (
    <>
      <div className='sticky opacity-50 top-0 bg-zinc-100 p-1 shadow-sm'>
        <nav className='flex flex-row space-x-4 xl:space-x-12 items-center justify-center text-xl'>
          <Link href='/'>
            <a>
              <Image
                src='/assets/logo.png'
                width={30}
                height={30}
                alt='zlogic'
              />
            </a>
          </Link>
          {menus.map((menu, idx) => (
            <SingleLinke
              key={idx}
              title={menu[0]}
              link={menu[1]}
              currentRoute={currentRoute == menu[1]}
            />
          ))}
          <ToggleButton onclick={() => setShow(!show)} />
        </nav>
      </div>
      {show && (
        <div className='md:hidden z-10'>
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 text-gray-700'>
            {menus.map((menu, idx) => (
              <MobileLinke
                key={idx}
                title={menu[0]}
                link={menu[1]}
                currentRoute={currentRoute == menu[1]}
                onclick={() => setShow(!show)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default NavBar
