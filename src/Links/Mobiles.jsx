import React from 'react'
import { products } from '../Warehouse'
import Buttons from './Buttons'

function Mobiles() {

  return (
    products.mobiles.map((item) =>{

        return  <div key={item.id} className='border-bottom border-black p-2 mx-2 '> 

                      <img src={item.image} alt='image not found' 
                      style={{width: 300, height:400}} />
      
                      <h1> {item.name} </h1>
                      <h3> {item.price} </h3>

                      <Buttons object={item}/>

                  </div>
             
      })
  )
}

export default Mobiles