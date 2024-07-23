import React from 'react'
import "./singleProduct.css"
import { useDispatch, useSelector } from 'react-redux'
import { decreaseValue, increaseValue } from '../../redux/slice/singleProductSlice'
function SingleProduct({singleProduct}) {

  const dispatch=useDispatch()
  const value=useSelector(state=>state.singleProductSlice.value)
  let curItem=value.find((item)=>item.id == singleProduct.id)
  
  let curQuantity=curItem?curItem.number:"0"

 
  
  return (
    <div className='singleCard'>      
      <img src={singleProduct.images[0]} alt="" />
      <h1>{singleProduct.category.name}</h1>
      <h2> Price:{singleProduct.price}</h2>
      <div className="button">
        <button onClick={()=>{
          dispatch(increaseValue(singleProduct.id))
         
        }}>+</button>
        <p>{curQuantity}</p>
        <button onClick={()=>{
          dispatch(decreaseValue(singleProduct.id))
        }}>-</button>
      </div>
    </div>
  )
}

export default SingleProduct