import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/homepage';
import GoogleMapFor30 from './components/maps';
import Vanillamap from './components/vanillamap';
import Gmap from './components/googlemap';

function App() {
  return (
    <Router>
      <div className='navDiv'>
      <img className="navImage" src="../images/wBrandMark_maroon_300x300.png" />
      <nav className='navLink'>
        <Link to="/">Home</Link>
        <Link to="/maps">Maps</Link>
        <Link to="/vanillamap">Vanilla Map</Link>
        <Link to="/googlemap">Google Map</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/maps' element={<GoogleMapFor30 />} />
        <Route path='/vanillaMap' element={<Vanillamap />} />
        <Route path='/googlemap' element={<Gmap />} />
      </Routes>
    </Router>
  );
}

export default App;
