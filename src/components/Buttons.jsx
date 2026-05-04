import React from 'react'
import './Buttons.css'

const Buttons = ({ text, handleClick, icon}) => {
  return (
    <button className='btn' onClick={handleClick}>
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  )
}



export default Buttons