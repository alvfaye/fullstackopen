const Header = ({ course }) => {
  <div>Header {course}</div>;
};
const Content = (props) => {
  <div>{props.content}</div>;
};
const Total = () => {
  <div>Total</div>;
};
function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const content = [part1, part2, part3];
  const total = exercises1 + exercises2 + exercises3;
  alert(course);
  console.error(content, total, course)
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </div>
  );
}

export default App;
