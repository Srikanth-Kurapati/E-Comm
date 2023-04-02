import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import { addProducts } from '../ReduxStore/Reducercart';
import Store from '../ReduxStore/Store';
import Mobiles from './Mobiles';

function Buttons(props) {

  const dispatch = useDispatch();
  return (
    <div>
        <button className='p-2 mx-2 btn btn-primary'
         onClick={()=>{
          dispatch(addProducts({
            price: props.object.price,
            name : props.object.name,
            id : props.object.id
          }))
          console.log(Store.getState());
          // console.log(props);
          // console.log(props.object);
          // console.log(props.object.price);
        }}> 
          Add
        </button>

{/* 
        <button className='p-2 btn btn-danger'> 
            Remove 
        </button> */}
    </div>
  )
}

export default Buttons