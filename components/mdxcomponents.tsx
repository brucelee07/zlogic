export const BlockQuote = ({ children }) => (
  <blockquote className='bg-zinc-200 text-gray-500 m-8 p-3 flex flex-row rounded-md shadow-xl'>
    &quot; {children} &quot;
  </blockquote>
)
export const Heading = ({ children }) => (
  <h3 className='text-center font-bold text-2xl p-3'>{children}</h3>
)
export const LI = ({ children }) => (
  <li className='flex-row pl-2 text-md text-gray-700'> - {children}</li>
)
export const EM = ({ children }) => (
  <em className='pl-5 text-sm text-gray-500'>-- {children}</em>
)
