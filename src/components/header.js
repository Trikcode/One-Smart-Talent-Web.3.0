import React from 'react'
import './header.css'
import car from '../assets/car.jfif'
function Header() {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={car} className='logo' alt='' />
        <div className='searchBar'>
          <div className='searchIcon'>
            <h3>search</h3>

            {/* <img src={searchIcon} /> */}
          </div>
          <input className='searchInput' />
        </div>
      </div>
    </div>
  )
}

export default Header
