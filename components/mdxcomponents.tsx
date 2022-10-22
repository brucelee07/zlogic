import React from 'react'

type Props = {
  children: React.ReactNode
}
export const BlockQuote: React.FC<Props> = ({ children }: Props) => (
  <blockquote className='bg-zinc-200 text-gray-500 m-8 p-3 flex flex-row rounded-md shadow-xl'>
    &quot; {children} &quot;
  </blockquote>
)
export const Heading3: React.FC<Props> = ({ children }: Props) => (
  <h3 className='text-left ml-5 font-bold text-2xl p-3'>{children}</h3>
)
export const Heading1: React.FC<Props> = ({ children }: Props) => (
  <h1 className='text-center font-extrabold text-3xl p-3'>{children}</h1>
)
export const LI: React.FC<Props> = ({ children }: Props) => (
  <li className='flex-row pl-2 text-md text-gray-700'> - {children}</li>
)

export const EM: React.FC <Props>= ({ children }: Props) => (
  <em className='pl-5 text-sm text-gray-500'>-- {children}</em>
)
