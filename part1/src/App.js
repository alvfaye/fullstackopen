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
    <div>
      {topic} {exercises}
    </div>
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
  return <Content course={course.content} />;
}

export default App;
