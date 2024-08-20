import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'
export default function Layout(props) {
  
    return (
      <div className='container'>
                <Navbar cartProducts={props.cartProducts} />
          <Outlet ></Outlet>
            </div>
  )
}
