import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenuComponent from './components/sidebar/sidebar';
import PostDrawer from './components/postdrawer/postDrawer';
import LeftBarComponent from './components/leftbar/leftBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupComponent from './signup/signup';

function App() {
  return (
    <Router>
      <div class="d-flex bd-highlight main-component">
        <div class="p-2 flex-fill bd-highlight p_options">
          <SidebarMenuComponent />
        </div>
        <div class="p-2 flex-fill bd-highlight scroll-feed">
          <PostDrawer />
        </div>
        <LeftBarComponent />
      </div>
      <Routes>
        <Route exact path='/signup' element={< SignupComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
