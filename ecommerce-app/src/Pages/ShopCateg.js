import React, { useContext } from 'react'
import '../styles/shopCateg.css'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdownIcon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item'


const ShopCateg = (props) => {
 
   const{allProduct} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdownIcon} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
          {allProduct.map((item,i)=>(
              props.category === item.category? <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> : null
          ))}

      </div>
      <div className='loadmore'>
         Explore More
      </div>
    </div>
  )
}

export default ShopCateg