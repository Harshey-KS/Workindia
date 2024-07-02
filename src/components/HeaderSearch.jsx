import React from 'react'

import './HeaderSearch.css'

const HeaderSearch = () => {
  return (
  
    <div className="container">
  <div className="header">
    <span className="exp">Explore</span>
    <span className="filter">Filter</span>
  </div>
  <div className="search-bar">
    <input type="text" className="search-input" placeholder="Search" />
  </div>
</div>

  )
}

export default HeaderSearch

