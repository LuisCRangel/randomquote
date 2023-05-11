import React from 'react'
import ButtonBox from './ButtonBox'

const QuoteBox = ({quoteRandom, handleClick, randomColor}) => {

  return (
    <article>
      <p style={{color: randomColor}}><i className='bx bxs-quote-left'> </i>{quoteRandom.quote}</p>
      <h1 style={{color: randomColor}} className='quote-author'>{quoteRandom.author}</h1>
      <ButtonBox
      handleClick={handleClick}
      randomColor={randomColor}
      />         
      <div className='img'>
      <img src={quoteRandom.image} alt="" />
      </div>
    </article>
  )
}

export default QuoteBox