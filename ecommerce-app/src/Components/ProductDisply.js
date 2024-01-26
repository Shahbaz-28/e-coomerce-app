import React, { useContext } from 'react'
import '../styles/productDisply.css'
import starIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'
import { ShopContext } from './Context/ShopContext'

const ProductDisply = (props) => {
  const {product} = props;
  const {addToCart}= useContext(ShopContext)
  return (
    <div className='productdisply'>
        <div className='productdis-left'>
            <div className='product-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                {/* <img src={product.image} alt=''/> */}
            </div>
            <div className='product-img'>
                <img className='productdis-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdis-right'>
           <h1>{product.name}</h1>
           <div className='productdis-right-star'>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starDullIcon} alt=''/>
                <p>122</p>
           </div>
           <div className='productDis-right-prices'>
             <div className='old-price'>${product.old_price}</div>
             <div className='new-price'>${product.new_price}</div>
           </div>
           <div className='right-discription'>
           A stylish and casual ensemble for the young gentleman features a comfortable navy blue cotton t-shirt with a playful graphic print of a skateboard in vibrant shades of green and orange.
           </div>
           <div className='product-size'>
            <h1>Select Size</h1>
            <div className='product-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='product-categ'><span>Category : </span>Women, T-Shirt, Crop-Top</p>
           <p className='product-categ'><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisply