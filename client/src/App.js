import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, Routes} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/"Component={Home} />
    <Route exact path="/login"Component={Login} />
    <Route exact path="/register"Component={Register} />
    </Routes>
    </>
  );
}

export default App;
