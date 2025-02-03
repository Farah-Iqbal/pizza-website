
import React from 'react'
import { FaBolt, FaHamburger, FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey-900'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center'>
              {/*logo burger*/}
              <FaHamburger className='w-8 h-8 text-yellow-400 pr-2 hover:text-cyan-300'/>
               {/*logo burger*/}
               <div style={{position:'relative'}}>
                <input className='rounded-3xl py-2 px-2 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block '
                placeholder='search for your favourite burger from menu'/>
                {/*search icon*/}
                <FaSearch className='w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block'/>
               </div>
              </div>
               {/*right side*/}
               <div className='flex justify-center items-center gap-2'>
                {/*bolt*/}
               <FaBolt className='w-5 h-5 text-amber-400 hidden lg:block md:block' />
               <p className='text-sm text-white hidden lg:block md:block'>order now and get it with</p>
               <span className='text-amber-400 hidden lg:block md:block'>15 minutes!</span>
               {/*cart*/}
               <FaCartShopping className=' w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400 '/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
