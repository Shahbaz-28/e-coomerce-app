import React, { useContext, useState } from 'react'
import '../styles/navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'
const Navbar = () => {
    
    const [menu, setmenu] = useState("shop")


    const {getTotalCartItem} = useContext(ShopContext)

  return (
    <div className='navbar' style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} >
      <div className='nav-logo'>
      <img src={logo} alt=""/>
      <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>setmenu("shop")}><Link style={{textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu=== "shop"? <hr/> : <></>}</li>
      <li onClick={()=>setmenu("mens")}><Link style={{textDecoration:'none', color:'black'}} to='mens'>Men</Link>{menu=== "mens"? <hr/> : <></>}</li>
      <li onClick={()=>setmenu("womens")}><Link style={{textDecoration:'none', color:'black'}} to='womens'>Women</Link>{menu=== "womens"? <hr/> : <></>}</li>
      <li onClick={()=>setmenu("kids")}><Link style={{textDecoration:'none', color:'black'}} to='kids'>Kids</Link>{menu=== "kids"? <hr/> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link style={{textDecoration:'none', color:'black'}} to='/login'><button>Login</button></Link> 
        <Link style={{textDecoration:'none', color:'black'}} to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div>
    </div>
    
  )
}

export default Navbar