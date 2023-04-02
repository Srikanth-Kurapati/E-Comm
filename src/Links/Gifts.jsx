import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { products } from '../Warehouse'
import Buttons from './Buttons'

function Gifts() {
  return (
    products.Gifts.map(item => {
        return <div className='border border-secondary p-2 mx-2 h-25' key={item.id}>
              <img src={item.image} alt="home appliances" 
              style={{width: 300}} />

              <h2 className='text-info'>{item.name}</h2>

             <span className='h3 text-primary py-2'>
             <FaRupeeSign className='my-2'/> {item.price} 
             </span>

              <Buttons object={item}/>

        </div>
})
  )
}

export default Gifts