import React from 'react'
import "../styles/hero.css"
import handicon from '../Assets/hand_icon.png'
import arroIcon from '../Assets/arrow.png'
import heroIcon from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-Icon'>
            <p>new</p>
            <img src={handicon} alt=''/>
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arroIcon} typeof='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={heroIcon} alt='' />
      </div>
    </div>
  )
}

export default Hero