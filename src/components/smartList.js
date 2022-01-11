import React from 'react'
import CollectionCard from './CollectionCard'
function SmartList({ smarttalent }) {
  return (
    <div className='punkList'>
      {smarttalent.map((data) => {
        return (
          <div>
            <CollectionCard
              key={data.token_id}
              id={data.token_id}
              name={data.name}
              traits={data.traits}
              image={image_original_url}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SmartList
