import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../redux/slice/porductSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import "./productList.css"
function ProductList() {

  const dispatch=useDispatch()
  
  const product=useSelector(state=>state.productSlice.product);  
 
  useEffect(()=>{
    dispatch(fetchPost())
  },[])
 
  
  return (
    <div className='productContainer'>
      <ul>
        {product.map((product)=>{
             return (
              <li><SingleProduct singleProduct={product}/></li>
             )
        })}
      </ul>
    </div>
  )
}

export default ProductList