import React from 'react'
import './button.css'

const Button = (props) => {
  return (
      <>
        <button className='primaryBtn'>{props.value}</button>
      </>
  )
}

export default Button