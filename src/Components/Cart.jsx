import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaRegTimesCircle, FaRemoveFormat, FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { removeProducts } from '../ReduxStore/Reducercart';

function Cart() {

    const dispacth = useDispatch()
    let cartTotal = 0;
    const [prods,setProds] = useState([1,2,3])

    const cartVal = useSelector(ecomm => ecomm.cart.map ((item) =>{
        cartTotal += item.productPrice
        console.log(item.productName);
    }))

    console.log(cartVal);
    
    // const kart = useSelector()
    // kart(ecomm => ecomm.cart.map (item =>{
    //     useEffect(()=>{
    //         setProds([...prods,item.cart.productName])
    //     })
    // }))

  return (
    <div className='position-relative'>

       

        <h3 className='center text-warning'> Total 
            <span className='text-info mx-2 border-bottom'> 
                <FaRupeeSign className='h2'/> {cartTotal} /-
            </span> 
        </h3>

        {useSelector(ecomm => ecomm.cart.map(item =>{
            return <div key={item.id} className='border-bottom border-secondary py-3 mx-2 position-relative'>
                
                    <span className='h5 mx-5 position-absolute top-0 start-0 '>
                         {item.productName} 
                    </span> 

                    <span className='h6 mx-5 position-absolute top-10 translate-middle'>
                         {item.productPrice} 
                    </span>

                    <button className='border-none position-absolute top-0 end-0'
                    onClick={() => {
                        dispacth( 
                            removeProducts({
                               id : item.id 
                            })
                        )
                    }}>
                        <FaRegTimesCircle />
                    </button>

                 </div>
        }))}
    </div>
  )
}

export default Cart