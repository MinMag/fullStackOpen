import React from 'react'

const Header = (props) => (
  <>
  <h1>{props.name}</h1>
  </>
)



const Content = (props) => (
  <div>
    
    {props.parts.map(part =>
      <Part key={part.id} part={part}/>
    )
    }
  </div>
)

const Part = (props) =>{
  return(
  <div>
    <p>{props.part.name} {props.part.exercises}</p>
  </div>
)
  }


const Total = ({parts}) => {
  const total = parts.reduce((p, c) => p + c.exercises, 0)

  return (
    <div>
      <strong>total of {total} exercises</strong>
      
    </div>
  )
    }
  

const Course = ({course}) => {
  return (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />

  </div>
  )

}

export default Course