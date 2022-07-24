import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="app">
        <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/react-website/" element={<Welcome/>} />
              <Route path="/react-website/resume" element={<Resume/>} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
