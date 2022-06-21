import React from "react";

// Main Component

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}></Total>
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((c) => (
        <p key={c.id}>
          {c.name} {c.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((total, part) => total + part.exercises, 0);
  return <h4>Total of {sum} exercises</h4>;
};
export default Course;
