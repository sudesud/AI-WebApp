import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'

const Layout = () => {
const navigate=useNavigate()
const [sidebar,setSidebar]=useState(false)
  return (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img className='w-30' src={assets.logo} alt="logo" onClick={()=>navigate('/')}  />
        {
            sidebar ? <X onClick={()=>setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
            :<Menu  onClick={()=>setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
        }
      </nav>

      <Outlet/>
    </div>
  )
}

export default Layout
