import Navbar from '@/components/navbar/navbar'
import React from 'react'

function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl m-auto'>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout