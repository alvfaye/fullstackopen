import React from 'react';
import { Header, Content } from '../components';

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};
function Courses({ courses }) {
  console.log('courses', courses[0].name);
  return (
    <div>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
}

export default Courses;
