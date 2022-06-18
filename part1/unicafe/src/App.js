import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    console.log(good)
    setGood(good +1)
  }
  const neutClick = () => {
    console.log(neutral)
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    console.log(bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <h1>statistics</h1>
      <p>good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad}
      
      </p>





    </div>
  )

}

export default App