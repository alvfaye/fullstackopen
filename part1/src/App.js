import React from 'react';
const course = {
  title: 'Half Stack Application Development',
  content: [
    {
      topic: 'Fundamentals of React',
      exercises: 10,
    },
    {
      topic: 'Using props to pass data',
      exercises: 7,
    },
    {
      topic: 'State of a component',
      exercises: 14,
    },
  ],
};

function Part({ id, topic, exercises }) {
  return (
    <h3>
      {topic} {exercises}
    </h3>
  );
}

function Content({ course }) {
  return (
    <>
      
      {course.map((x) => (
        <Part topic={x.topic} exercises={x.exercises} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <h2>{course.title}</h2>
      <Content course={course.content} />
      <h2>Total &nbsp;
      {
         course.content.reduce((a,b)=>a+b.exercises, 0)  
       }</h2>
    </>
  );
}

export default App;
