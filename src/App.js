import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/homepage';
import Gmap from './components/googlemap';

function App() {
  return (
    <Router>
      <div className='navDiv'>
      <img className="navImage" src="../images/wBrandMark_maroon_300x300.png" />
      <nav className='navLink'>
        <Link to="/">Home</Link>
        <Link to="/googlemap">Google Map</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/googlemap' element={<Gmap />} />
      </Routes>
    </Router>
  );
}

export default App;
