import React from 'react'

const Heading: React.FC<{ title: string }> = ({ title }) => (
  <h3 className='underline underline-offset-4 decoration-4 text-xl font-bold ml-4'>
    {title}
  </h3>
)

export default Heading
