import React, {useState} from "react";

//Header component
const Header = (props) => {
  return (
    <div>
      <h1>{ props.title}</h1>
    </div>
  )
}
//Content component
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={ props.exercises3}/>
    </div>
  )
}
//Part component
const Part = (props) => {
  const {part, exercise} = props
  return (
  <p>{part} { exercise}</p>
)}
//Total component
const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <p>Number of exercises = { exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }
  
  return (
    <div>
      <Header title={course.name} />
      
      <Content
        part1={course.parts[0].name} exercises1={course.parts[0].exercises}
        part2={course.parts[1].name} exercises2={course.parts[1].exercises}
        part3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  )
}

export default App