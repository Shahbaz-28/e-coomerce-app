import React from 'react'
import '../styles/NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive  offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type='emial' placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter