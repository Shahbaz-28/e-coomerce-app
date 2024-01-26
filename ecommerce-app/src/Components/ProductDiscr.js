import React from 'react'
import '../styles/productDiscr.css'

const ProductDiscr = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Our user-friendly interface allows you to effortlessly navigate through our extensive product categories. From the latest fashion trends to cutting-edge electronics, and from home essentials to unique gifts, we've got it all. Enjoy a smooth shopping journey with intuitive search options, detailed product descriptions, and stunning visuals that bring our offerings to life.</p>
            <p>
            Have questions or concerns? Our dedicated customer support team is ready to assist you. Reach out via live chat, email, or phone, and we'll ensure your queries are addressed promptly and professionally.
            </p>
            
        </div>
    </div>
  )
}

export default ProductDiscr