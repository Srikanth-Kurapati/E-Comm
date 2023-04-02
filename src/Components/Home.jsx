import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='row centre mx-5'>
       
        <Link to='/mobiles' className='m-2 p-2  col-lg-3 col-md-4 h4 text-info  border border-warning link'  > Mobiles </Link>
       

        <Link className='m-2 p-2  col-lg-3 col-md-4 border border-warning h4 text-info link' to='/home Appliances'> Home Appliances </Link>

        <Link  className='m-2 p-2  col-lg-3 col-md-4 h4 text-info border border-warning link' to='/vouchers'> Digital gift Cards </Link>

        <Link  className='m-2 p-2 col-lg-3 col-md-4 h4 text-info border border-warning link' to='/gifts'> Gifts </Link>

    </div>
  )
}

export default Home