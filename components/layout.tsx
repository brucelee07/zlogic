import React from 'react'
import Footer from './footer'
import NavBar from './navbar'
import SEOHead from './seohead'
import SiderBar from './siderbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <SEOHead />
    <NavBar />
    <div className='bg-zinc-100'>
      <main className='m-auto grid grid-cols-1 md:grid-cols-4 md:w-4/5 xl:w-2/3 md:shadow-md md:rounded-xl md:gap-2 xl:gap-4'>
        <div className='col-span-1 md:col-span-3 bg-zinc-50'>{children}</div>
        <div className='invisible md:visible md:col-span-1'>
          <SiderBar />
        </div>
      </main>
      <Footer />
    </div>
  </>
)

export default Layout