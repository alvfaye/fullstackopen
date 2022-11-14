import { courses } from './data';
import { Course } from './components'

function App() {
  //console.log(JSON.stringify(courses));
  return <h1 className="text-yellow-700">
    <Course course={courses} />
  </h1>;
}

export default App;
