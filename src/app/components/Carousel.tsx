import React from 'react'

export default function Carousel() {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-grey-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href=''
                className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow'>
                <img src='./3layered.webp'
                  alt='pizza 1'
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-grey-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Three Layered Pizza</h3>
              </a>
            </div>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700'>
              <a href=''
                className='group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 mb-4'>
                <img src='./classic.jpeg'
                  alt='pizza 2'
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-grey-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites</h3>
              </a>
              <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                <a href=''
                  className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40'>
                  <img src='./fiery korean.webp'
                    alt='pizza 3'
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                  <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-grey-900/5'>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Korean Fiery Bites</h3>
                </a>
                <a href=''
                  className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40'>
                  <img src='./peri peri.webp'
                    alt='pizza 4'
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                  <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-grey-900/5'>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Peri Peri Bites</h3>
                </a>
              </div>
            </div>
            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
              <a href=''
              className='group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow'>
                  <img src='./prawn-deluxe.jpg'
                    alt='pizza 5'
                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                  <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-grey-900/5'>
                  </div>
                  <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Prawn Deluxe</h3>
                  </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
