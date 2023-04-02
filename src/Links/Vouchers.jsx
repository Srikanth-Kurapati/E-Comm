import React from 'react'
import { products } from '../Warehouse'
import Buttons from './Buttons'

function Vouchers() {
  return (
    products.GiftCards.map(item => {
            return <div className='border border-secondary p-2 mx-2 h-25' key={item.id}>
                  <img src={item.image} alt="home appliances" 
                  style={{width: 300}}  />

                  <h2>{item.name}</h2>
                  <h3> {item.price} </h3>
                  

                  <Buttons object={item}/>
            </div>
    })
  )
}

export default Vouchers