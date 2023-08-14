import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/"Component={Home} />
    <Route exact path="/login"Component={Login} />
    <Route exact path="/register"Component={Register} />
    <Route exact path="/logout"Component={Logout} />
    </Routes>
    </>
  );
}

export default App;
