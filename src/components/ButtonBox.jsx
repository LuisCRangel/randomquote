import React from 'react'

const ButtonBox = ({handleClick, randomColor}) => {
  return (
    <button style={{backgroundColor: randomColor, color:'white'}} className='btn' onClick={handleClick}>&#62;</button>  
  )
}

export default ButtonBox