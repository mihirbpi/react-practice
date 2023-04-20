import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Birthday from './components/Birthday';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="app">
        <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Welcome/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/birthday" element={<Birthday/>} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
