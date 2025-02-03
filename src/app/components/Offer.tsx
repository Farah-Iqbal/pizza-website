'use client'
import React from 'react'
type Offer ={
  title:string;
  description:string;
}
const SpecialOffers:React.FC =() =>{
const offers:Offer[] =[
  {
    title:'Happy Hours',
    description:' get 50% off on all drinks from 5pm till 7pm'
  },

  {
    title:'Double Feast Deal',
    description:'get 35% off on ordering two pizzas'
  },

  {
    title:'Winter Special Deal',
    description:' get 1medium+1large pizza in nly Rs.1999'
  },

  {
    title:'Winter Special Deal',
    description:' get 1medium+1large pizza in nly Rs.1999'
  },

];
const handleOfferClick=(description:string) =>{
  alert(description);
}
return(
  <section className='py-10'>
    <div className='container mx-auto text-center'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer's</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {offers.map((offer,index)=>(
          <button key={index}
          onClick={()=>handleOfferClick(offer.description)}
          className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
            <h3 className='text-2xl font-semibold text-amber-500'>{offer.title}</h3>
            <p className='text-black mt-1 mb-2'>{offer.description}</p>
          </button>
        ))

        }
      </div>

    </div>

  </section>
)

}

export default SpecialOffers;
  
