import React from 'react'
import './header.css'
function CollectionCard({ id, name, price, image }) {
  return (
    <div className='collectionCard'>
      <img src={image} alt='' />
      <div className='details'></div>
      <div className='name'>
        {name}
        <div className='id'>.#{id}</div>
      </div>
      <div className='priceContainer'>
        <div className='price'>{traits[0]?.value}</div>
      </div>
    </div>
  )
}

export default CollectionCard
