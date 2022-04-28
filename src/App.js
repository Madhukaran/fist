import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupComponent from './signup/signup';
import HomePage from './homepage';
import config from './config.json';

function App() {
  return (
    <Router basename={config.subRoute}>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/signup' element={< SignupComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
