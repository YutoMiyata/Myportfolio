import './App.css';
import Base from './components/Base';
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom"
import Profile from './components/Profile';
import Works from './components/Works';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Base />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/works" element={<Works/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
