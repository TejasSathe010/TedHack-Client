import './App.css';
import home from './images/home.svg'
import analyze from './images/analyze.svg';
import settings from './images/settings.svg';
import team from './images/team.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomeComponent from './pages/HomeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <div className="sidebar">
            <div className="sidebar-icon">
              <Link to="/home">
                <img
                  src={home}
                  alt="Icon 1"
                  className="sidebar-img"
                />
              </Link>
            </div>
            <div className="sidebar-icon">
              <Link to="/analyze">
                <img
                  src={analyze}
                  alt="Icon 2"
                  className="sidebar-img"
                />
              </Link>
            </div>
            <div className="sidebar-icon">
              <Link to="/settings">
                <img
                  src={settings}
                  alt="Icon 3"
                  className="sidebar-img"
                />
              </Link>
            </div>
            <div className="sidebar-icon">
              <Link to="/team">
                <img
                  src={team}
                  alt="Icon 4"
                  className="sidebar-img"
                />
              </Link>
            </div>
          </div>

          <div className='main-content'>
            <Routes>
              <Route path="/home" element={<HomeComponent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
