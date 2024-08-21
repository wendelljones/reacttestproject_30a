import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/homepage';
import GoogleMapFor30 from './components/maps';

function App() {
  return (
    <Router>
      <div className='navDiv'>
      <img className="navImage" src="../images/wBrandMark_maroon_300x300.png" />
      <nav className='navLink'>
        <Link to="/">Home</Link>
        <Link to="/maps">Maps</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/maps' element={<GoogleMapFor30 />} />
      </Routes>
    </Router>
  );
}

export default App;
