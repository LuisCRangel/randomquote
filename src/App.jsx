import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quote.json'
import colors from './json/colors.json'

function App() {

  const randomelement = arr => {
   const indexRandom = (Math.floor( Math.random() * arr.length))
   return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(randomelement(quotes))
  const [randomColor, setRandomColor] = useState(randomelement(colors))

  console.log(randomColor)

  const handleClick = () => {
    setQuoteRandom(randomelement(quotes))
    setRandomColor(randomelement(colors))
  }

  return (
    <div style={{backgroundColor: randomColor}} className='App'>
      <QuoteBox
        quoteRandom = {quoteRandom}
        handleClick ={handleClick}
        randomColor ={randomColor}
      />     
    </div>
  )
}

export default App
