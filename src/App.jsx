import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {

  return (
    <div className="App font-['Montserrat']">
      <Router>
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
