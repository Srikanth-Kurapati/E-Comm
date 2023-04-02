import React from 'react'
import { Link } from 'react-router-dom'
import {FaLuggageCart, FaUser, FaHome} from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Navbar() {

  const cartLength = useSelector((ecomm) => ecomm.cart.length)
  
  return (
    <nav className='navbar sticky-top bg-black p-2 mx-1 my-2'>
        <div>
            
            <Link to='/' className='flex-1 justify-end p-2 text-primary '> <FaHome className='h3 text-warning'/> Home  </Link>
            <Link to = '/about' className='flex-1'> About </Link>

{/* <ul>
<li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
</ul>
     */}

      {/* <span className='position-absolute top-0 start-0 mx-1 my-3'>
            <Link to='/mobiles'>  <FaArrowLeft /> mobiles  </Link> 
            <Link to='/home Appliances'>  <FaArrowLeft /> home appliances  </Link> 
            <Link to='/vouchers'>  <FaArrowLeft /> vouchers  </Link> 
            <Link to='/gifts'>  <FaArrowLeft /> gifts  </Link> 
        </span> */}


        </div>
           <div>
            <FaUser className='bg-white text-secondary mx-2 h2 flex-end '/>

              <Link to='/myCart' > 
                  <FaLuggageCart className='bg-white text-secondary h2 flex-end'   /> 

                  <span className="position-absolute top-3 start-200 translate-middle badge rounded-pill bg-danger">
                      {cartLength}
                  </span>

              </Link>
           </div>
    </nav>
  )
}

export default Navbar



/*
<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

  */