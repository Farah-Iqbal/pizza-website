import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium '>
          <a className='hover:text-cyan-500 text-amber-500' href='#'>Home</a>
          <a className='hover:text-cyan-500 text-amber-500' href='#'>About</a>
          <a className='hover:text-cyan-500 text-amber-500' href='#'>Delivery</a>
          <a className='hover:text-cyan-500 text-amber-500' href='#'>Contact</a>
          </nav>
        
          <div className='flex justify-center gap-x-4 transition-transform duration-500 ease-in-out transform hover:scale-105'>
  <a href='https://facebook.com' target='_blank' rel='nofollow noopener' aria-label='Visit our Facebook page'>
    <img src='https://img.icons8.com/?size=48&id=118497&format=png' alt='facebook logo' />
  </a>

  <a href='https://linkedin.com' target='_blank' rel='nofollow noopener' aria-label='Visit our LinkedIn page'>
    <img src='https://img.icons8.com/?size=48&id=vWcULbkKy3DN&format=png' alt='linkedin logo' />
  </a>

  <a href='https://instagram.com' target='_blank' rel='nofollow noopener' aria-label='Visit our Instagram page'>
    <img src='https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png' alt='instagram logo' />
  </a>

  <a href='https://twitter.com' target='_blank' rel='nofollow noopener' aria-label='Visit our Twitter page'>
    <img src='https://img.icons8.com/?size=48&id=5MQ0gPAYYx7a&format=png' alt='twitter logo' />
  </a>
</div>

        <p className='text-center hover:text-cyan-600 text-amber-500 font-medium mb-8'>2024 Farah Iqbal. All Rights Reserved</p>
<br/>
<br/>
      </footer>
    </div>
  )
}
