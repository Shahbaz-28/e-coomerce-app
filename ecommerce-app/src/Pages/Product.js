import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrum';
import { ShopContext } from '../Components/Context/ShopContext';
import ProductDisply from '../Components/ProductDisply';
import ProductDiscr from '../Components/ProductDiscr';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  
  const{allProduct} = useContext(ShopContext)

  const{productId} = useParams();

  const product =allProduct.find((e)=> e.id === Number(productId))
   
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisply product= {product}/>
      <ProductDiscr/>
      <RelatedProducts/>
    </div>
  )
}

export default Product