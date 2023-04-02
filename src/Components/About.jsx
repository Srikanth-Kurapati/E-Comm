import React from 'react'

function About() {
  return (
    <div className='border h3 border-secondary mx-2 p-2' style={{borderRadius:'5%'}}>
      <p className='text-success'>  
        this is a tiny e-commerce website, here you can buy 
      </p>
      <ul className='text-warning'>
        <li> Mobiles </li>
        <li> Home Appliances </li>
        <li> Gifts </li>
        <li> Digital gift cards (vouchers) </li>
      </ul>
    </div>
  )
}

export default About