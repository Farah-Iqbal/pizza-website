import React from 'react'

const FloatingImageContentBlock = () =>{
  return(
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
      <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Pizzas</h2>
      <p className='text-white mb-4'>Experience the juiciest pizzas in town,made with fresh ingredients and baked to perfection.</p>
      <button className='bg-amber-500 text-black px-4 py-2 rounded hover:bg-gray-500 transition duration-200'>Order Now</button>
<h3 className='text-2xl font-semibold mb-2 mt-6 text-center text-white'>ComingSoon:Our New Pizza Launches.</h3>
<ul>
  <li><strong>Carbonara Pizza:</strong> rich and filled with dairies, such as Pecorino Romano cheese and heavy cream. It also contains eggs, scallions, and a dash of black pepper.</li>
  <br/>
  <li><strong>Alla Vongole Pizza:</strong> a fiery delight topped with tomato sauce, mozzarella, garlic, chili powder, and small clams.</li>
  <br/>
  <li><strong>Spinaci Pizza:</strong>healthy pizza topped with tomato sauce, mozzarella, spinach, olive oil, and salt & pepper.</li>
  <br/>
  <li><strong>Salmone Pizza:</strong>special winter treat topped with tomato sauce, creamy Mascarpone cheese, smoked salmon, and arugula.</li>
  <br/>
  <li><strong>Frutti di Mare Pizza:</strong> topped with tomato sauce, mozzarella, and crispy seafood (vongole, tiger prawns, mussels).</li>
</ul>
</div>
<div className='md:w-1/2 mt-6 md:mt-0'>
<img src='https://th.bing.com/th?id=OIF.Cwes4odBriKE%2fxLbvr3ovw&w=190&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7'
 alt='delicouus pizza'
 className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>


      </div>
    </section>
  )

}
export default FloatingImageContentBlock;