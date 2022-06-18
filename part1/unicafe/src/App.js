import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td><td>{props.value}</td>
  </tr>
)



const Statistics = (props) => {
  let all = props.good + props.bad + props.neutral
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(props.good / all) + (props.bad /all * -1)} />
      <StatisticLine text='positive' value={(props.good/all * 100) + " %"} />
    </tbody>
    </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {

    setGood(good +1)
  }
  const neutClick = () => {
    
    setNeutral(neutral + 1)
  }
  const badClick = () => {

    setBad(bad + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>




    </div>
  )

}

export default App