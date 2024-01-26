import React, { useContext } from 'react'
import '../styles/cartItem.css'
import { ShopContext } from './Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItem = () => {

    const { getTotalCartAmount ,allProduct, cartItem, addToCart,removeFromCart } = useContext(ShopContext)
       
  
  return (
    <div className='cartitems'>
    <div className='cart-items-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr/>
     {allProduct.map((e)=>{
          if(cartItem[e.id]>0){
            console.log(e.name)
            return     <div key={e.id}>

        <div className='cartitem-format cart-items-main'>
            <img src={e.image} alt='' className='cart-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
            <p>{e.new_price*cartItem[e.id]}</p>
            <img className='cart-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
        </div>
        <hr/>
    </div>
          }
          return null
     })}

     <div className='cartitems-down'>
      <div className='cartitem-total'>
        <h1>cart Total</h1>
        <div>
        <div className='cartitem-total-item'>
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>

        <div className='cartitem-total-item'>
          <p>Shipping Fee</p>
          <p>Free</p>
          </div>
          <hr/>
          <div className='cartitem-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button className='btn-cart'>PROCEED TO CHECKOUT</button>
      </div>
    
     <div className='cartitem-promocode' >
      <p>If you have promocode, Enter it here</p>
      <div className='cartitem-promobox'>
        <input type='text' placeholder='promo code'/>
        <button>Submit</button>
      </div>
     </div>
     </div>
    </div>
  )
}

export default CartItem