import './App.css';
import Toppage from './components/Toppage';
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom"
import Profile from './components/Profile';
import Works from './components/Works';
import WorksTasksTable from './components/works/detail/WorksTasksTable';
import WorksCafeToDo from './components/works/detail/WorksCafeToDo';
import WorksHomeworkManegement from './components/works/detail/WorksHomeworkManegement';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Toppage />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/works/tasks_table" element={<WorksTasksTable/>}/>
          <Route path="/works/cafe_to_do" element={<WorksCafeToDo/>}/>
          <Route path="/works/homework_management" element={<WorksHomeworkManegement/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
