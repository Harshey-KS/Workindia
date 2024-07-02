import React from 'react'
import HeaderSearch from '../components/HeaderSearch'
import img from '../assets/img.png';
import './ItemGridPage.css';

const ItemGridPage = () => {
  return (
    <div>
    <HeaderSearch/>
    <div className='grid'>
        <div>
            <div><img src={img} width='40px' height='40px' alt="img" /></div>
        Item1
        </div>
        <div>
            <div>
            <img src={img} width='40px' height='40px' alt="img" /></div>
        Item2
        </div>

        <div>
            <div><img src={img} width='40px' height='40px' alt="img" />
            </div>
        Item3
        </div>
    </div>
    <div className='grid'>
        <div>
            <div><img src={img} width='40px' height='40px' alt="img" /></div>
        Item4
        </div>
        <div>
            <div>
            <img src={img} width='40px' height='40px' alt="img" /></div>
        Item5
        </div>

        <div>
            <div><img src={img} width='40px' height='40px' alt="img" />
            </div>
        Item6
        </div>
    </div>
    <div className='grid'>
        <div>
            <div><img src={img} width='40px' height='40px' alt="img" /></div>
        Item7
        </div>
        <div>
            <div>
            <img src={img} width='40px' height='40px' alt="img" /></div>
        Item8
        </div>

        <div>
            <div><img src={img} width='40px' height='40px' alt="img" />
            </div>
        Item9
        </div>
    </div>
    </div>
  )
}

export default ItemGridPage
