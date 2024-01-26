import React from 'react'
import '../styles/newCollections.css'
import newCollection from '../Assets/new_collections'
import Item from './Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Collection</h1>
      <hr/>
      <div className='collections'>
        {newCollection.map((item,i)=>(
           <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  )
}

export default NewCollections ;