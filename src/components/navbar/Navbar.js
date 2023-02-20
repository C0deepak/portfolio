import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './navbar.css'

const Navbar = () => {
  return (
      <>
        <nav>
            <div className="left">
              <Link to='/'>
                I'M<span>ALIVE</span>
              </Link>
            </div>
            <div className="right">
                <a href='#collab'><Button value="Collaborate"/></a>
            </div>
        </nav>
      </>
  )
}

export default Navbar