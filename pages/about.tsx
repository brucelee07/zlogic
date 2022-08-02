import type { NextPage } from 'next'
import SEOHead from '../components/seohead'

const About: NextPage = () => {
  return (
    <>
      <SEOHead title='about me' />
      <div className="min-h-[85vh]">
        <p>About</p>
      </div>
    </>
  )
}

export default About
